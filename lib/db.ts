import fs from "fs"
import path from "path"

// Simple file-based database for waitlist emails
const DB_PATH = path.join(process.cwd(), "data")
const WAITLIST_FILE = path.join(DB_PATH, "waitlist.json")

// Initialize database
export function initDb() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      fs.mkdirSync(DB_PATH, { recursive: true })
    }

    if (!fs.existsSync(WAITLIST_FILE)) {
      fs.writeFileSync(WAITLIST_FILE, JSON.stringify({ emails: [] }))
    }
  } catch (error) {
    console.error("Error initializing database:", error)
  }
}

// Get all waitlist emails
export function getWaitlistEmails() {
  try {
    initDb()
    const data = fs.readFileSync(WAITLIST_FILE, "utf8")
    return JSON.parse(data).emails
  } catch (error) {
    console.error("Error reading waitlist data:", error)
    return []
  }
}

// Add email to waitlist
export function addToWaitlist(email: string) {
  try {
    initDb()
    const data = fs.readFileSync(WAITLIST_FILE, "utf8")
    const waitlist = JSON.parse(data)

    // Check if email already exists
    if (waitlist.emails.includes(email)) {
      return { success: false, message: "Email already registered" }
    }

    // Add email with timestamp
    waitlist.emails.push({
      email,
      timestamp: new Date().toISOString(),
    })

    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlist, null, 2))
    return { success: true, message: "Email added successfully" }
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return { success: false, message: "Server error" }
  }
}
