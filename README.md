# DEEPROOTS — Launching Soon Page

This is the **DEEPROOTS Site**.

## 🔧 Tech Stack

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS (no custom CSS unless neccessary)
- **Structure**: Component-based
- **Deployment**: Vercel (auto-deployed with GitHub integration)

---

## 🗂️ Repository Structure

```
/DEEPROOTS
|
├── src/
|    ├──pages/
│    |    ├── academy
│    |    ├── api
│    |    ├── auth
│    |    ├── connect
│    |    ├── deworld
│    |    ├── identity
│    |    ├── lab
│    |    ├── index.tsx
│    |    ├── about.tsx
│    |    └── faq.tsx
│    |
|    └──components  //contains all components file
|    └──styles/
│      └── globals.css
│      └── tailwind.config.js
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧪 Getting Started

```bash
npm install
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 🔍 SEO Implementation

This project implements comprehensive SEO practices using Next.js Head component for optimal search engine visibility. Below is an example of our SEO implementation:

```jsx
<Head>
  <title>title</title>
  <meta name="description" content="description" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://domainname.earth/" />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:title" content="title" />
  <meta property="og:description" content="description" />
  <meta property="og:url" content="https://domainname.earth/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://domainname.earth/og-image.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="title" />
  <meta name="twitter:description" content="description" />
  <meta name="twitter:image" content="https://domainname.earth/og-image.jpg" />
</Head>
```

# ✔️ Checking Lint

```bash
npm run lint
```

## Prettier Rules

.prettierrc.json

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "auto",
  "jsxSingleQuote": false,
  "bracketSameLine": false,
  "singleAttributePerLine": true
}
```

## Lint Rules

.eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "react/no-unescaped-entities": "off"
  }
}
```

## ENV file setup

Example .env file

```env
NEXTAUTH_SECRET=text for auth secret
NEXTAUTH_URL=https://yourdomain.com
DATABASE_URL=database url of supabase
DIRECT_URL=database direct url of supabase
NEXT_PUBLIC_SUPABASE_URL=suapbase public url
SUPABASE_SERVICE_ROLE_KEY=supabase service role key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your supabse anon key

EMAIL_USER=email address from which we will send mail to seeders
EMAIL_PASS=app password for email authentication
RESEND_API_KEY=api key for resend account

ADMIN_EMAIL=email for admin login
ADMIN_PASSWORD=password for admin login

CRON_SECRET=secret text to run maintanince cron job it should be same as repository variable
```

# Automated Cron Job (GitHub Actions)

This project uses a GitHub Actions workflow to automatically trigger the /api/cron/maintenance endpoint every 10 minutes. This endpoint handles deal room reminders, expired record cleanup, and other scheduled tasks.

## Workflow File

Location: .github/workflows/ping-cron.yml

## Security

The endpoint is protected with a secret header (x-cron-secret) to prevent abuse. The secret is stored in GitHub Actions and passed in every request.

## Cron Job Includes:

Sending reminder emails (12h, 22h, auto-decline at 24h)

Deleting inactive submissions older than 12h

Deleting expired password reset tokens

## Example Workflow

```yaml
name: Ping Reminder API Every 10 Minutes

on:
  schedule:
    - cron: '*/10 * * * *'
  workflow_dispatch:

jobs:
  ping-api:
    runs-on: ubuntu-latest
    env:
      NEXTAUTH_URL: ${{ secrets.NEXTAUTH_URL }}
      CRON_SECRET: ${{ secrets.CRON_SECRET }}

    steps:
      - name: Ping Reminder Endpoint
        run: |
          echo "🔁 Triggering deal room cron at $(date)"

          if [ -z "${NEXTAUTH_URL}" ]; then
              echo "❌ NEXTAUTH_URL is not set!"
              exit 1
          fi

          if [ -z "${CRON_SECRET}" ]; then
              echo "❌ CRON_SECRET is not set!"
              exit 1
          fi

          echo "🌐 Pinging: ${NEXTAUTH_URL}/api/cron/maintenance"
          STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" -L \
            -H "x-cron-secret: ${CRON_SECRET}" \
            "${NEXTAUTH_URL}/api/cron/maintenance")

          echo "🔎 Received status code: $STATUS_CODE"
          if [ "$STATUS_CODE" -ne 200 ]; then
              echo "❌ Endpoint returned non-200 status code."
              exit 2
          fi

          echo "✅ Cron job ran successfully."
```

## Secrets Required

Make sure the following secrets are set in your GitHub repository:

### Secret Name Description

NEXTAUTH_URL - Your deployed frontend URL (e.g. https://yourapp.com)

CRON_SECRET - Same token as process.env.CRON_SECRET used in your API

## 📄 License

MIT © 2025 DEEPROOTS
