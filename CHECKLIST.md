# Pre-Launch Checklist

## Code Quality ✅

- [x] Fixed import paths
- [x] Added accessibility attributes (alt text)
- [x] Added `.input` styles
- [x] Mobile nav responsive
- [x] ESLint warnings resolved (img optimization optional for v2)
- [x] TypeScript checks pass
- [x] Frontend builds without errors

## Features Verified

- [x] Homepage with login/register links
- [x] Mobile navigation (fixed bottom)
- [x] Logo optimized (SVG)
- [x] Marketplace listing display
- [x] Create/manage listings flow
- [x] Dashboard (user view)

## Documentation ✅

- [x] README.md (root)
- [x] docs/DEPLOYMENT.md
- [x] docs/RELEASES.md
- [x] docs/APK.md
- [x] docs/CAPACITOR.md
- [x] CONTRIBUTING.md
- [x] .gitignore (root)

## Deployment Steps

### Step 1: GitHub Setup
1. Initialize Git repo:
   ```bash
   cd c:\Projects\Mamatradr\v2
   git init
   git add .
   git commit -m "Initial commit: MamaTradr MVP"
   ```

2. Create repo on GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/mamatradr.git
   git push -u origin main
   ```

3. Create a release:
   - Go to GitHub Releases
   - Tag: `v1.0.0`
   - Title: `v1.0.0 — Initial MVP`
   - See `docs/RELEASES.md` for template

### Step 2: Deploy Frontend to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Connect GitHub repo
3. Set root: `frontend/`
4. Add env: `NEXT_PUBLIC_API_URL=http://localhost:5000` (update after backend deployed)
5. Deploy

### Step 3: Deploy Backend to Render (or Railway)
1. Go to [render.com](https://render.com)
2. Create Web Service from GitHub
3. Root: `backend/`
4. Build: `npm install`
5. Start: `node src/server.js`
6. Add env vars: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `JWT_SECRET`
7. Deploy

### Step 4: Update Frontend API URL
1. Get backend URL from Render/Railway
2. Update `frontend/.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.com
   ```
3. Commit and push (Vercel auto-redeploys)

### Step 5: APK Build & Distribution
1. Run `frontend/build-apk.cmd` or `frontend/build-apk.sh`
2. Follow Android Studio steps to sign APK
3. Distribute via Google Play, Firebase, or direct link
4. See `docs/APK.md` for details

## Testing Checklist

- [ ] Test homepage on mobile
- [ ] Test login/register pages
- [ ] Test marketplace feed
- [ ] Test create listing (if backend running)
- [ ] Test mobile nav on all pages
- [ ] Test logo displays correctly
- [ ] Test responsive layout (mobile, tablet, desktop)

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (.env)
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Next Features (v2)

- [ ] Image optimization with next/image
- [ ] Payment integration (Stripe/Paystack)
- [ ] Real-time notifications
- [ ] Order tracking
- [ ] User messaging
- [ ] Admin dashboard
