import { type NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient, hasSupabaseConfig } from "@/lib/supabase"

// In-memory storage for demo/development purposes
const waitlistData: Array<{
  id: number
  first_name: string
  last_name: string
  email: string
  ip_address: string
  referrer: string
  created_at: string
}> = []

let nextId = 1

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { firstName, lastName, email } = data

    if (!firstName || !lastName || !email || typeof email !== "string" || !email.includes("@")) {
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
      console.log("Using Supabase database")
      try {
        const supabase = createServerSupabaseClient()

        // Insert data into waitlist table
        const { data: insertData, error } = await supabase
          .from("waitlist")
          .insert([
            {
              first_name: firstName,
              last_name: lastName,
              email: email.toLowerCase().trim(),
              ip_address: ip,
              referrer,
            },
          ])
          .select()

        if (error) {
          console.error("Supabase error:", error)

          // Check if it's a unique constraint error (email already exists)
          if (error.code === "23505" || error.message?.includes("duplicate key")) {
            return NextResponse.json(
              {
                success: false,
                message: "This email is already on our waitlist",
              },
              { status: 400 },
            )
          }

          return NextResponse.json(
            {
              success: false,
              message: "Failed to join waitlist. Please try again.",
            },
            { status: 500 },
          )
        }

        console.log("Successfully added to Supabase waitlist:", insertData)

        return NextResponse.json(
          {
            success: true,
            message: "You've been added to our waitlist!",
          },
          { status: 200 },
        )
      } catch (supabaseError) {
        console.error("Supabase connection error:", supabaseError)
        // Fall back to in-memory storage
      }
    }

    // Fallback to in-memory storage (for development/demo)
    console.log("Using in-memory storage (demo mode)")

    // Check if email already exists in memory
    const existingEntry = waitlistData.find((entry) => entry.email.toLowerCase() === email.toLowerCase())
    if (existingEntry) {
      return NextResponse.json(
        {
          success: false,
          message: "This email is already on our waitlist",
        },
        { status: 400 },
      )
    }

    // Add to in-memory storage
    const newEntry = {
      id: nextId++,
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase().trim(),
      ip_address: ip,
      referrer,
      created_at: new Date().toISOString(),
    }

    waitlistData.push(newEntry)

    console.log("Successfully added to in-memory waitlist:", newEntry)
    console.log("Total waitlist entries:", waitlistData.length)

    return NextResponse.json(
      {
        success: true,
        message: "You've been added to our waitlist! (Demo mode)",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error in waitlist API:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again later.",
      },
      { status: 500 },
    )
  }
}

// GET endpoint to retrieve waitlist data (for admin dashboard)
export async function GET(request: NextRequest) {
  const url = new URL(request.url)

  // Check if this is a debug request
  if (url.searchParams.get("debug") === "env") {
    return NextResponse.json({
      hasSupabaseConfig: hasSupabaseConfig(),
      envCheck: {
        SUPABASE_URL: !!process.env.SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
      supabaseUrl: process.env.SUPABASE_URL ? process.env.SUPABASE_URL.substring(0, 30) + "..." : "Not set",
      timestamp: new Date().toISOString(),
    })
  }

  try {
    // Check if we have Supabase configuration
    if (hasSupabaseConfig()) {
      console.log("Fetching from Supabase database")
      try {
        const supabase = createServerSupabaseClient()

        // Fetch data from waitlist table
        const { data: waitlistResult, error } = await supabase
          .from("waitlist")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) {
          console.error("Error retrieving waitlist data from Supabase:", error)
          // Fall back to in-memory data
        } else {
          return NextResponse.json(
            {
              success: true,
              data: waitlistResult,
              total: waitlistResult.length,
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
    console.log("Fetching from in-memory storage (demo mode)")
    return NextResponse.json(
      {
        success: true,
        data: waitlistData,
        total: waitlistData.length,
        source: "memory",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error retrieving waitlist data:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    )
  }
}
