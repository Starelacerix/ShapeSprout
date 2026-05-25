# ShapeSprout Studio

ShapeSprout Studio is a one-page installable PWA for beginner drawing practice. It is designed as a Procreate companion: open it beside Procreate on iPad, generate a small drawing mission, then draw the final piece in Procreate.

## Included

```txt
index.html
style.css
app.js
manifest.webmanifest
service-worker.js
icon-192.png
icon-512.png
icon-maskable-192.png
icon-maskable-512.png
apple-touch-icon.png
icon-master-1024.png
favicon.ico
favicon-32.png
favicon-16.png
social-preview.png
```

## Features

- Prompt generator for object characters, foods, shapes, blobs, icons, and logos
- Blueprint-style construction steps
- Shape Gym warmup drills
- Stash with local saved prompts and completion status
- Export/import stash as JSON
- Mini thumbnail canvas with Apple Pencil / Pointer Events support
- Export mini sketch as PNG
- Offline app shell after first successful load
- iPad safe-area layout and touch-friendly controls
- Apple touch icon and PWA manifest icons

## Local testing

Service workers work on `localhost`, not normal local `file://` URLs. The easiest test:

```bash
python3 -m http.server 8080
```

Then open:

```txt
http://localhost:8080
```

## Deploy free

### GitHub Pages

1. Create a GitHub repository.
2. Upload these files at the repository root.
3. Go to **Settings → Pages**.
4. Choose the `main` branch and root folder.
5. Open the generated HTTPS URL.
6. Test the manifest, service worker, and offline reload.

### Netlify

1. Drag this folder into Netlify.
2. Open the HTTPS deploy URL.
3. Test the PWA.

### Cloudflare Pages or Vercel

1. Push the folder to GitHub.
2. Import the repository.
3. Use no build command.
4. Set the output/publish directory to the project root.
5. Deploy.

## Install on iPad

1. Open the deployed HTTPS URL in Safari.
2. Tap the Share button.
3. Tap **Add to Home Screen**.
4. Confirm the name and icon.
5. Launch ShapeSprout from the Home Screen.

## Notes

- Saved prompts are stored locally on the device using `localStorage`.
- Use **Export stash** before clearing browser data or moving devices.
- The mini canvas is for thumbnails only; Procreate remains the main drawing tool.


## Icon fix notes

All icon files are stored at the project root. The manifest uses `./icon-192.png`, `./icon-512.png`, and separate maskable icons. `index.html` links `./apple-touch-icon.png`, `./favicon.ico`, and PNG favicons. The service worker cache name was bumped to force browsers to refresh old cached icon paths.
