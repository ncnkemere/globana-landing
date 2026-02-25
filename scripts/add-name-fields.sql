-- Add first_name and last_name columns to the waitlist table
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS first_name TEXT,
ADD COLUMN IF NOT EXISTS last_name TEXT;

-- Update the admin page query to include the new fields
-- This is handled in the admin page component automatically
