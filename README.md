# Teen Patti Spin (teenpattispingame.com.pk)

A Next.js website for **Teen Patti Spin** – a Pakistani card-gaming earning app. The site provides downloads, deposit/withdraw guides, FAQs and SEO-optimized content for Pakistani players.

Built with [Next.js 15](https://nextjs.org), React 19, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

```bash
npm run dev    # Start the dev server with hot-reload
npm run build  # Build for production
npm run start  # Start the production server
npm run lint   # Lint the project with ESLint
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable             | Required | Description                                    |
| -------------------- | -------- | ---------------------------------------------- |
| `NEXT_PUBLIC_GA_ID`  | optional | Google Analytics 4 measurement ID              |
| `RESEND_API_KEY`     | optional | API key for the Resend contact-form integration|
| `CONTACT_EMAIL`      | optional | Recipient address for contact-form submissions |
| `RESEND_FROM`        | optional | Verified sender address (production)           |

## Project Structure

```
src/
├── app/                                # Next.js app router
│   ├── page.tsx                        # Home page
│   ├── layout.tsx                      # Root layout (metadata, header/footer)
│   ├── download-teen-patti-spin/       # APK download page
│   ├── deposit-money-in-teen-patti-spin/  # Deposit guide
│   ├── withdraw-money-from-teen-patti-spin/ # Withdraw guide
│   ├── teen-patti-spin-for-pc/         # PC version page
│   ├── teen-patti-spin-for-ios/        # iOS version page
│   ├── about-us/, contact-us/, privacy/, disclaimer/
│   ├── blog/                           # Blog listing & individual posts
│   ├── api/contact/                    # Contact form API route
│   └── sitemap.ts, sitemap-*.xml/      # Sitemaps
├── components/                         # Reusable React components
└── middleware.ts                       # Security headers
```

## Domain

Production domain: **https://teenpattispingame.com.pk**

## Deploy

The easiest way to deploy this app is on [Vercel](https://vercel.com/new). The repository works out-of-the-box with Vercel's Next.js support.
