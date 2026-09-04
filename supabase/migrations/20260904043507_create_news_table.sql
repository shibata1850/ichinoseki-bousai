/*
# お知らせ管理テーブル作成

## 概要
有限会社一関防災設備のウェブサイトで、お知らせ（ニュース）の追加・編集・削除を行うためのデータベーステーブルを作成します。
管理画面（admin.html）からログインしたユーザーがお知らせを管理し、サイト訪問者はトップページとお知らせページで内容を閲覧できます。

## 新規テーブル
- `news` テーブル
  - `id`（UUID、主キー）：お知らせの一意識別子
  - `date`（date、必須）：お知らせの日付（表示並び替えに使用）
  - `category`（text、必須）：カテゴリ（「お知らせ」「採用情報」「施工・対応事例」「イベント」のいずれか）
  - `heading`（text、必須）：お知らせの見出し（タイトル）
  - `body`（text、任意）：お知らせの本文（詳細文章）
  - `sort_order`（integer、デフォルト0）：同じ日付内での表示順序（小さい順に表示）
  - `created_at`（timestamptz、デフォルト現在時刻）：レコード作成日時

## セキュリティ（RLSポリシー）
- `news` テーブルで行レベルセキュリティ（RLS）を有効化
- SELECT（読み取り）：サイト訪問者（anon）とログインユーザー（authenticated）の両方が閲覧可能
  - お知らせは公開情報であるため、誰でも読み取れるようにします
- INSERT / UPDATE / DELETE（書き込み）：ログインユーザー（authenticated）のみ可能
  - 管理画面からログインしたユーザーのみがお知らせの追加・編集・削除を行えます

## インデックス
- `news_date_sort_idx`：`date` 降順、`sort_order` 昇順の複合インデックス
  - お知らせ一覧表示時の並び替えを高速化します
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  category text NOT NULL DEFAULT 'お知らせ',
  heading text NOT NULL,
  body text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- SELECT: 公開情報なので誰でも読み取れる
DROP POLICY IF EXISTS "read_news" ON news;
CREATE POLICY "read_news"
ON news FOR SELECT
TO anon, authenticated
USING (true);

-- INSERT: ログインユーザーのみ
DROP POLICY IF EXISTS "insert_news" ON news;
CREATE POLICY "insert_news"
ON news FOR INSERT
TO authenticated
WITH CHECK (true);

-- UPDATE: ログインユーザーのみ
DROP POLICY IF EXISTS "update_news" ON news;
CREATE POLICY "update_news"
ON news FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- DELETE: ログインユーザーのみ
DROP POLICY IF EXISTS "delete_news" ON news;
CREATE POLICY "delete_news"
ON news FOR DELETE
TO authenticated
USING (true);

-- 並び替え用インデックス
CREATE INDEX IF NOT EXISTS news_date_sort_idx ON news (date DESC, sort_order ASC);
