# Capacitor packaging (Android APK)

Steps to wrap the frontend as an Android app using Capacitor:

1. Build the frontend for production:

```bash
cd frontend
npm install
npm run build
npm run export
```

2. Install Capacitor and initialize:

```bash
npm install @capacitor/cli @capacitor/core --save-dev
npx cap init mama-tradr com.mamatradr.app
npx cap add android
```

3. Copy the built assets and open Android Studio:

```bash
npx cap copy android
npx cap open android
```

4. In Android Studio: build signed APK or App Bundle.

## Quick command file

If you are on Windows, run `frontend\build-apk.cmd` from the repo root.

If you are on macOS/Linux, run `frontend/build-apk.sh` from the repo root.

Notes:
- Ensure `start_url` in `public/manifest.json` is `/`.
- For Next.js dynamic routes, prefer hosting and pointing Capacitor to the hosted URL or use static export for PWA routes.
