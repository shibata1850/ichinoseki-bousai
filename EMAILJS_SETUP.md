# EmailJS セットアップ手順

## 1. EmailJS アカウント作成

1. https://www.emailjs.com/ にアクセスし、無料アカウントを作成する
2. 無料プランで月200通まで送信可能

## 2. Email Service（送信元メールサービス）の設定

1. EmailJS ダッシュボードの「Email Services」を開く
2. 「Add New Service」をクリック
3. Gmail（または使用するメールサービス）を選択
4. 送信元となるメールアドレス（info@ichinoseki-bousai.jp など）で連携
5. Service ID を確認（例：`service_ichinoseki`）
   - この値を `.env` の `VITE_EMAILJS_SERVICE_ID` に設定する

## 3. Email Template（メールテンプレート）の作成

1. 「Email Templates」を開き「Create New Template」をクリック
2. 以下の変数を使ってテンプレートを作成する

### テンプレート変数一覧

フォームの各入力項目が以下の変数名で EmailJS に渡されます：

| 変数名 | フォームの項目 |
|---|---|
| `{{name}}` | お名前（必須） |
| `{{company}}` | 会社名・施設名（任意） |
| `{{tel}}` | 電話番号（必須） |
| `{{email}}` | メールアドレス（任意） |
| `{{type}}` | お問い合わせ種別（必須） |
| `{{building}}` | 建物種別（任意） |
| `{{timing}}` | 希望時期（任意） |
| `{{fire_dept}}` | 消防署からの指摘の有無（任意） |
| `{{message}}` | お問い合わせ内容（必須） |

### テンプレート本文の例

```
【お問い合わせフォームより】

お名前：{{name}}
会社名・施設名：{{company}}
電話番号：{{tel}}
メールアドレス：{{email}}

お問い合わせ種別：{{type}}
建物種別：{{building}}
希望時期：{{timing}}
消防署からの指摘：{{fire_dept}}

お問い合わせ内容：
{{message}}
```

3. Template ID を確認（例：`template_contact`）
   - この値を `.env` の `VITE_EMAILJS_TEMPLATE_ID` に設定する

### To（送信先）の設定

- To Email: 受信したいメールアドレス（会社の担当者のアドレス）を設定
- From Email: 送信元アドレス（Email Service で設定したもの）
- Reply To: `{{email}}`（お客様のメールアドレスに返信できるようにする）

## 4. Public Key の取得と設定

1. EmailJS ダッシュボードの「Account」→「API Keys」を開く
2. Public Key をコピー
3. プロジェクトの `.env` ファイルの `VITE_EMAILJS_PUBLIC_KEY` に貼り付ける

```
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxx
```

## 5. 確認

1. `.env` の3項目すべてが正しく設定されていることを確認：
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
2. サイトのお問い合わせフォームからテスト送信を行う
3. 設定した送信先メールアドレスにメールが届くことを確認

## 注意事項

- Public Key はフロントエンド（ブラウザ）で使用されるものであり、秘密鍵ではありません。EmailJS の仕様上、ブラウザ側での使用を想定しています。
- 無料プランは月200通まで。超過する場合は有料プランへの移行が必要です。
- `.env` ファイルは `.gitignore` に含まれており、公開リポジトリにはアップロードされません。
