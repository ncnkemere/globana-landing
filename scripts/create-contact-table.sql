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
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting new records (for the API)
CREATE POLICY IF NOT EXISTS "Allow public insert" ON contact_submissions
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Create a policy that allows reading records (for admin dashboard)
CREATE POLICY IF NOT EXISTS "Allow service role read" ON contact_submissions
  FOR SELECT 
  TO service_role 
  USING (true);

-- Add comments to document the table
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions';
COMMENT ON COLUMN contact_submissions.name IS 'Contact person name';
COMMENT ON COLUMN contact_submissions.email IS 'Contact person email';
COMMENT ON COLUMN contact_submissions.message IS 'Contact message';
COMMENT ON COLUMN contact_submissions.ip_address IS 'IP address for analytics';
COMMENT ON COLUMN contact_submissions.referrer IS 'Referrer URL for analytics';
