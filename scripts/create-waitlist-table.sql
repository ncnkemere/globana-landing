-- Create the waitlist table if it doesn't exist
CREATE TABLE IF NOT EXISTS waitlist (
  id BIGSERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE NOT NULL,
  ip_address TEXT,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting new records (for the API)
CREATE POLICY IF NOT EXISTS "Allow public insert" ON waitlist
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Create a policy that allows reading records (for admin dashboard)
CREATE POLICY IF NOT EXISTS "Allow service role read" ON waitlist
  FOR SELECT 
  TO service_role 
  USING (true);

-- Add comments to document the table
COMMENT ON TABLE waitlist IS 'Stores waitlist signups with user details and analytics data';
COMMENT ON COLUMN waitlist.first_name IS 'User first name';
COMMENT ON COLUMN waitlist.last_name IS 'User last name';
COMMENT ON COLUMN waitlist.email IS 'User email address (unique)';
COMMENT ON COLUMN waitlist.ip_address IS 'IP address for analytics';
COMMENT ON COLUMN waitlist.referrer IS 'Referrer URL for analytics';
