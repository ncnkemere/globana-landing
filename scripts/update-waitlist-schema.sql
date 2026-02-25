-- Update the waitlist table to include first_name and last_name columns
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS first_name TEXT,
ADD COLUMN IF NOT EXISTS last_name TEXT;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Add a comment to document the table structure
COMMENT ON TABLE waitlist IS 'Stores waitlist signups with user details and analytics data';
COMMENT ON COLUMN waitlist.first_name IS 'User first name';
COMMENT ON COLUMN waitlist.last_name IS 'User last name';
COMMENT ON COLUMN waitlist.email IS 'User email address (unique)';
COMMENT ON COLUMN waitlist.ip_address IS 'IP address for analytics';
COMMENT ON COLUMN waitlist.referrer IS 'Referrer URL for analytics';
