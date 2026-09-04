/*
# Create site_contents table for editable text content

1. New Tables
- `site_contents`
  - `id` (uuid, primary key)
  - `content_key` (text, unique, not null) — identifier like "home_hero_title"
  - `page` (text, not null) — page group: home, company, why, service, rolling, gallery, news, contact, common
  - `label` (text, not null) — display label for the admin UI, e.g. "ヒーロー タイトル"
  - `content` (text, not null, default '') — the editable text value
  - `updated_at` (timestamptz, default now())

2. Security
- Enable RLS on `site_contents`.
- This app has a sign-in admin screen, so:
  - SELECT: TO anon, authenticated USING (true) — all visitors can read text content
  - INSERT/UPDATE/DELETE: TO authenticated only — only logged-in admins can modify
- 4 separate policies per CRUD verb.

3. Notes
- The `content_key` column is unique so lookups by key are fast.
- Initial seed data will be inserted via execute_sql after the table is created.
*/

CREATE TABLE IF NOT EXISTS site_contents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_key text UNIQUE NOT NULL,
  page text NOT NULL,
  label text NOT NULL,
  content text NOT NULL DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE site_contents ENABLE ROW LEVEL SECURITY;

-- SELECT: anyone can read (public site content)
DROP POLICY IF EXISTS "select_site_contents" ON site_contents;
CREATE POLICY "select_site_contents"
ON site_contents FOR SELECT
TO anon, authenticated USING (true);

-- INSERT: only authenticated admins
DROP POLICY IF EXISTS "insert_site_contents" ON site_contents;
CREATE POLICY "insert_site_contents"
ON site_contents FOR INSERT
TO authenticated WITH CHECK (true);

-- UPDATE: only authenticated admins
DROP POLICY IF EXISTS "update_site_contents" ON site_contents;
CREATE POLICY "update_site_contents"
ON site_contents FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

-- DELETE: only authenticated admins
DROP POLICY IF EXISTS "delete_site_contents" ON site_contents;
CREATE POLICY "delete_site_contents"
ON site_contents FOR DELETE
TO authenticated USING (true);
