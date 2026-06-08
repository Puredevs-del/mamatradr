# Deployment Guide

## Frontend → Vercel (Recommended)

1. Push your repo to GitHub if not already:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MamaTradr MVP"
   git remote add origin https://github.com/YOUR_USERNAME/mamatradr.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.

3. Click "Add New..." → "Project" → select your `mamatradr` repo.

4. Set root directory: `frontend/`

5. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: `https://your-backend-url.com`

6. Deploy by clicking "Deploy". Vercel will automatically build and host.

### Redeploy on push
Vercel auto-redeploys whenever you push to `main` branch.

## Backend → Render or Railway

### Render (free tier available)

1. Go to [render.com](https://render.com) and sign up.

2. Create a new "Web Service" → connect your GitHub repo.

3. Configure:
   - Build command: `npm install`
   - Start command: `node src/server.js`
   - Root directory: `backend/`

4. Add environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `JWT_SECRET`
   - Cloudinary keys (if needed)

5. Deploy.

### Railway (alternative)

1. Go to [railway.app](https://railway.app) and sign in with GitHub.

2. Create new project from repo.

3. Add a `Procfile` in backend root:
   ```
   web: node src/server.js
   ```

4. Add environment variables in Railway dashboard.

5. Deploy.

## Database (Supabase)

No deployment needed — your Supabase project is already live.

## Update frontend API URL

Once backend is deployed, update `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

Then redeploy frontend.

## Test deployed app

Visit your Vercel URL (e.g., `https://mamatradr.vercel.app`) and test:
- Login/register
- Marketplace feed
- Create listing
- Mobile nav
