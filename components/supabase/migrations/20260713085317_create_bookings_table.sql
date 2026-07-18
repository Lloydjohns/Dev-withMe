/*
# Create bookings table for client consultations

1. New Tables
- `bookings` — stores consultation/appointment requests from clients
  - `id` (uuid, primary key)
  - `name` (text, not null) — client's full name
  - `email` (text, not null) — client's email address
  - `phone` (text) — optional phone number
  - `company` (text) — optional company name
  - `service` (text, not null) — which service they're interested in
  - `preferred_date` (date, not null) — requested appointment date
  - `preferred_time` (text, not null) — requested time slot
  - `timezone` (text, not null) — client's timezone
  - `team_size` (text) — optional team size range
  - `budget` (text) — optional budget range
  - `project_description` (text, not null) — details about the project
  - `status` (text, default 'pending') — booking status: pending, confirmed, cancelled, completed
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `bookings`.
- This is a no-auth app (no sign-in screen), so allow anon + authenticated to INSERT and SELECT their own bookings.
- SELECT: allow anon to read (so the booking page can check for existing bookings by email/date)
- INSERT: allow anyone to create a booking
- No UPDATE or DELETE from the client (admin operations only)

3. Important Notes
- The booking page is a public form — no authentication required.
- Customers fill out their details and submit.
- Status defaults to 'pending' and is managed by the Nexus Digital team.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  timezone text NOT NULL DEFAULT 'UTC',
  team_size text,
  budget text,
  project_description text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Add index for date-based queries (checking availability)
CREATE INDEX IF NOT EXISTS idx_bookings_preferred_date ON bookings(preferred_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert bookings (public form)
DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Allow anyone to read bookings (so the form can check existing bookings)
DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings" ON bookings FOR SELECT
TO anon, authenticated USING (true);
