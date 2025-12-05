/*
  # Create Demo Requests Table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `name` (text) - Contact person name
      - `email` (text) - Contact email address
      - `company` (text, nullable) - Company/organization name
      - `industry` (text) - Industry sector (Batteries, Cement, Steel, Aluminum, etc.)
      - `compliance_needs` (text) - Compliance requirements (DBP, CBAM, ESG, or combination)
      - `timeline` (text) - When compliance is needed
      - `message` (text, nullable) - Additional message or notes
      - `created_at` (timestamptz) - When the request was submitted
  
  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for anonymous users to insert their demo requests
    - Add policy for authenticated users (admins) to view all demo requests
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  industry text NOT NULL,
  compliance_needs text NOT NULL,
  timeline text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit demo requests"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all demo requests"
  ON demo_requests
  FOR SELECT
  TO authenticated
  USING (true);