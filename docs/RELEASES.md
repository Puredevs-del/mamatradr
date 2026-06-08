# Release & Versioning

## Semantic Versioning

Use [semver](https://semver.org/): `MAJOR.MINOR.PATCH`

- `MAJOR`: breaking changes (database schema, API endpoints removed)
- `MINOR`: new features (backward compatible)
- `PATCH`: bug fixes

## Create a GitHub Release

1. Go to your repo on GitHub.

2. Click "Releases" → "Draft a new release".

3. Tag version: `v1.0.0` (or next version).

4. Release title: `v1.0.0 — Initial MVP`

5. Describe changes:
   ```markdown
   ## Features
   - User authentication with JWT
   - Local marketplace listings
   - Image uploads (Cloudinary)
   - Mobile-responsive UI
   - Role-based seller/buyer accounts

   ## Fixes
   - Fixed mobile nav accessibility
   - Added alt text to images
   - Corrected import paths

   ## Known Issues
   - Images not optimized with next/image (future)
   - No payment integration yet (v2)

   ## Installation
   See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for setup.
   
   ## APK Download
   See [APK.md](./docs/APK.md) for Android packaging.
   ```

6. Click "Publish release".

## Version bumping workflow

1. Update version in `frontend/package.json` and `backend/package.json`:
   ```json
   {
     "version": "1.0.1"
   }
   ```

2. Commit and push:
   ```bash
   git commit -m "chore: bump version to 1.0.1"
   git tag v1.0.1
   git push origin main --tags
   ```

3. Go to GitHub → create release from tag `v1.0.1`.

## Auto-deployment from releases

Once you set up Vercel/Render, they will auto-deploy on push to `main`.
You can also manually trigger redeploys if needed.
