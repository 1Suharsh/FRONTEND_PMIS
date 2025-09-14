
# PMIS Frontend - Premium (Next.js + Tailwind)

This is the premium themed frontend for the PM Internship Recommendation Engine. 
It includes a hero banner, premium gradient theme, and a dashboard with mock-data fallback.

## Run locally
1. Install deps
   ```bash
   npm install
   ```
2. Create .env.local (optional) and set:
   ```env
   NEXT_PUBLIC_API_URL=https://your-render-backend.onrender.com
   ```
3. Run dev
   ```bash
   npm run dev
   ```
4. Build
   ```bash
   npm run build
   ```

## Deploy on Vercel
- Push to GitHub and import into Vercel. Set Environment Variable `NEXT_PUBLIC_API_URL` to your backend.
- Deploy — site will use mock data if backend is unreachable.
