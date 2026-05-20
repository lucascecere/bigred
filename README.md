# Big Red Moving Company

Website for Big Red Moving Company — a family-owned local moving company based in Hingham, MA, serving the South Shore.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Resend (email)

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `LEAD_NOTIFICATION_EMAIL` | Email address that receives new lead notifications |
| `NEXT_PUBLIC_SITE_URL` | Full site URL (default: `https://bigredmoving.com`) |

---

## Customization

### Phone number
Find and replace all instances of:
- Display: `(781) 555-0100`
- Link: `tel:+17815550100`

### Address
Find and replace `Hingham, MA 02043`.

### All site copy
Edit `content/site-content.ts` at the project root. This is the single source of truth for every headline, paragraph, service description, FAQ, and label on the site.

### Logo
The site uses a text-based logo pulled from `content/site-content.ts` → `header.logoText`.
To update the logo text, edit that field. If you later add an image logo, replace the text in
`src/components/sections/Header.tsx` with an `<Image>` component pointing to `public/logo.png`.

---

## Resend Setup

1. Log in to [resend.com](https://resend.com) and create an API key.
2. Add and verify the sending domain (e.g., `bigredmoving.com`).
3. Update the `from` address in `src/lib/email.ts` to match your verified domain:
   ```ts
   from: 'Big Red Moving <leads@bigredmoving.com>',
   ```
4. Set `LEAD_NOTIFICATION_EMAIL` in `.env.local` (and in Vercel) to the inbox that should receive leads.

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Add all environment variables from `.env.example` in the Vercel project settings.
4. Deploy. Vercel auto-deploys on every push to `main`.

---

## Post-Launch SEO Checklist

- [ ] Create and verify Google Business Profile with the Hingham, MA address
- [ ] Submit `https://bigredmoving.com/sitemap.xml` to Google Search Console
- [ ] Build local citations: Yelp, BBB, Angi, Thumbtack, Nextdoor, HomeAdvisor
- [ ] Get first 5 Google reviews from friends, family, and early customers
- [ ] Set up Google Analytics or Vercel Analytics to track traffic

**Rate limiter note:** The lead form uses an in-memory rate limiter (3 submissions / IP / hour). This resets on Vercel cold starts. It's sufficient to block casual abuse on a low-traffic lead gen site. If stricter rate limiting is needed, replace it with an [Upstash Redis](https://upstash.com) integration.

---

Built by [Your Website Friend](https://yourwebsitefriend.com)
