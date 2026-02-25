import { type NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient, hasSupabaseConfig } from "@/lib/supabase"

// In-memory storage for demo/development purposes
const contactData: Array<{
  id: number
  name: string
  email: string
  message: string
  ip_address: string
  referrer: string
  created_at: string
}> = []

let nextId = 1

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, message } = data

    if (!name || !email || !message || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Please fill in all fields with valid information" },
        { status: 400 },
      )
    }

    // Get IP address and referrer for analytics
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const referrer = request.headers.get("referer") || "unknown"

    // Check if we have Supabase configuration
    if (hasSupabaseConfig()) {
      console.log("Using Supabase database for contact form")
      try {
        const supabase = createServerSupabaseClient()

        // Insert data into contact_submissions table
        const { data: insertData, error } = await supabase
          .from("contact_submissions")
          .insert([
            {
              name: name.trim(),
              email: email.toLowerCase().trim(),
              message: message.trim(),
              ip_address: ip,
              referrer,
            },
          ])
          .select()

        if (error) {
          console.error("Supabase error:", error)
          // Fall back to in-memory storage
        } else {
          console.log("Successfully submitted to Supabase contact form:", insertData)

          return NextResponse.json(
            {
              success: true,
              message: "Message sent successfully!",
            },
            { status: 200 },
          )
        }
      } catch (supabaseError) {
        console.error("Supabase connection error:", supabaseError)
        // Fall back to in-memory storage
      }
    }

    // Fallback to in-memory storage (for development/demo)
    console.log("Using in-memory storage for contact form (demo mode)")

    // Add to in-memory storage
    const newEntry = {
      id: nextId++,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      message: message.trim(),
      ip_address: ip,
      referrer,
      created_at: new Date().toISOString(),
    }

    contactData.push(newEntry)

    console.log("Successfully submitted to in-memory contact form:", newEntry)
    console.log("Total contact submissions:", contactData.length)

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! (Demo mode)",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error in contact API:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again later.",
      },
      { status: 500 },
    )
  }
}

// GET endpoint to retrieve contact data (for admin dashboard)
export async function GET() {
  try {
    // Check if we have Supabase configuration
    if (hasSupabaseConfig()) {
      console.log("Fetching contact data from Supabase database")
      try {
        const supabase = createServerSupabaseClient()

        // Fetch data from contact_submissions table
        const { data: contactResult, error } = await supabase
          .from("contact_submissions")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) {
          console.error("Error retrieving contact data from Supabase:", error)
          // Fall back to in-memory data
        } else {
          return NextResponse.json(
            {
              success: true,
              data: contactResult,
              total: contactResult.length,
              source: "supabase",
            },
            { status: 200 },
          )
        }
      } catch (supabaseError) {
        console.error("Supabase connection error:", supabaseError)
        // Fall back to in-memory data
      }
    }

    // Fallback to in-memory storage
    console.log("Fetching contact data from in-memory storage (demo mode)")
    return NextResponse.json(
      {
        success: true,
        data: contactData,
        total: contactData.length,
        source: "memory",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error retrieving contact data:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    )
  }
}
