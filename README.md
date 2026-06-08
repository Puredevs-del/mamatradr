# MamaTradr

Local marketplace MVP (Frontend: Next.js + Tailwind, Backend: Node+Express)

See `frontend/README.md` and `backend/README.md` for per-service details.

## Quick start (local development)

```bash
# backend
cd backend
npm install
cp .env.example .env  # fill in your Supabase & Cloudinary keys
node src/server.js

# frontend (in new terminal)
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Deployment

- **Frontend (Vercel)**: See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- **Backend (Render/Railway)**: See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- **GitHub Releases**: See [docs/RELEASES.md](docs/RELEASES.md)
- **APK for Android**: See [docs/APK.md](docs/APK.md)

## Pre-Launch Checklist

See [CHECKLIST.md](CHECKLIST.md) for full deployment steps.

## Architecture

- Frontend: Next.js 16 with Tailwind CSS
- Backend: Express + Node.js
- Database: Supabase PostgreSQL
- Auth: JWT + bcrypt
- Storage: Cloudinary
- Mobile: Capacitor (PWA → APK)

## Features

✅ User authentication (signup/login)  
✅ Seller shops and product listings  
✅ Marketplace feed  
✅ Image uploads  
✅ Role-based access (buyer/seller)  
✅ Mobile-responsive UI  
✅ Installable as Android APK  

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
