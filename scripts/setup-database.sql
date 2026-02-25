-- Create the waitlist table
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

-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  ip_address TEXT,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for waitlist table
CREATE POLICY IF NOT EXISTS "Allow public insert on waitlist" ON waitlist
  FOR INSERT 
  TO public 
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow service role read on waitlist" ON waitlist
  FOR SELECT 
  TO service_role 
  USING (true);

-- Create policies for contact_submissions table
CREATE POLICY IF NOT EXISTS "Allow public insert on contact_submissions" ON contact_submissions
  FOR INSERT 
  TO public 
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow service role read on contact_submissions" ON contact_submissions
  FOR SELECT 
  TO service_role 
  USING (true);

-- Add comments to document the tables
COMMENT ON TABLE waitlist IS 'Stores waitlist signups with user details and analytics data';
COMMENT ON COLUMN waitlist.first_name IS 'User first name';
COMMENT ON COLUMN waitlist.last_name IS 'User last name';
COMMENT ON COLUMN waitlist.email IS 'User email address (unique)';
COMMENT ON COLUMN waitlist.ip_address IS 'IP address for analytics';
COMMENT ON COLUMN waitlist.referrer IS 'Referrer URL for analytics';

COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions';
COMMENT ON COLUMN contact_submissions.name IS 'Contact person name';
COMMENT ON COLUMN contact_submissions.email IS 'Contact person email';
COMMENT ON COLUMN contact_submissions.message IS 'Contact message';
COMMENT ON COLUMN contact_submissions.ip_address IS 'IP address for analytics';
COMMENT ON COLUMN contact_submissions.referrer IS 'Referrer URL for analytics';
