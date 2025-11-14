-- Portfolio Visitor Counter - Supabase Setup
-- Run this SQL in your Supabase SQL Editor

-- Create visitors table
CREATE TABLE IF NOT EXISTS portfolio_visitors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  visited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT,
  referrer TEXT
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_visitor_id ON portfolio_visitors(visitor_id);
CREATE INDEX IF NOT EXISTS idx_visited_at ON portfolio_visitors(visited_at);

-- Enable Row Level Security
ALTER TABLE portfolio_visitors ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY "Allow public insert" ON portfolio_visitors
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy to allow anyone to read count
CREATE POLICY "Allow public read" ON portfolio_visitors
  FOR SELECT TO anon
  USING (true);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact submissions
CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read submissions (optional)
CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);
