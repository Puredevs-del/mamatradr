# APK Download & Distribution

## Build the APK locally

### Windows
```cmd
cd frontend
build-apk.cmd
```

### macOS / Linux
```bash
cd frontend
./build-apk.sh
```

Both scripts will:
1. Build the frontend
2. Export static assets
3. Initialize Capacitor
4. Open Android Studio

## In Android Studio

1. Project opens in Android Studio.

2. Click **Build** → **Generate Signed Bundle / APK**.

3. Select **APK** and click **Next**.

4. Create or select a signing key:
   - You'll be asked for a keystore password (save it somewhere safe).
   - Fill in key details (common name, organization, etc.).

5. Select **Release** build variant.

6. Finish. APK will be generated in `android/app/release/`.

## Test the APK

1. Connect an Android device (or use an emulator).

2. Run:
   ```bash
   adb install android/app/release/app-release.apk
   ```

3. Open the app on your device and test features.

## Distribute the APK

### Option 1: Google Play Store
1. Create a Google Play Developer account ($25 one-time fee).
2. Go to [play.google.com/console](https://play.google.com/console).
3. Create an app, upload the signed APK, fill metadata, and submit for review.

### Option 2: Firebase App Distribution
1. Set up Firebase in your Google Cloud project.
2. Upload APK via Firebase Console.
3. Share test links with beta testers.

### Option 3: Direct Download
1. Host the APK on GitHub Releases, Dropbox, or your server.
2. Share a direct download link.

## Version management

Before each APK build:
1. Update version in `frontend/package.json`:
   ```json
   {
     "version": "1.0.1"
   }
   ```

2. Update Android `versionCode` and `versionName` in `android/app/build.gradle`:
   ```gradle
   android {
     defaultConfig {
       versionCode 2
       versionName "1.0.1"
     }
   }
   ```

3. Rebuild and sign APK with new version.
