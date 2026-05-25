# ShapeSprout Studio

ShapeSprout Studio is a one-page installable PWA for beginner drawing practice. It is designed as a Procreate companion: open it beside Procreate on iPad, generate a small drawing mission, then draw the final piece in Procreate.

## Included

```txt
index.html
style.css
rough-lite.js
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
- Shape-aware blueprint diagrams and construction steps
- Shape Gym warmup drills
- Stash with local saved prompts and completion status
- Export/import stash as JSON
- Mini thumbnail canvas with Apple Pencil / Pointer Events support
- Export mini sketch as PNG
- Offline app shell after first successful load
- iPad safe-area layout and touch-friendly controls
- Apple touch icon and PWA manifest icons


## Blueprint fix in this build

The Blueprint View is now **shape-aware**. It no longer gives the same generic bean-body diagram for every prompt. The generated mission carries a subject-specific construction profile, so a strawberry uses a berry/leaf/seed plan, a mug uses cup/handle/steam shapes, toast uses an arched slice/crust plan, boba uses cup/lid/straw/pearls, and logo/icon prompts use a symbol-container simplification plan.

The app also shows the subject shape recipe directly in the prompt card:
`base construction → shape chain → drawing order → icon/sticker simplification`.


## Blueprint renderer note

The old blueprint panel used inline SVG strings. This build replaces that with `rough-lite.js`, a local root-level SVG sketch renderer. It draws subject-specific construction maps with DOM-created SVG elements instead of fragile injected markup, so missing or unusual subject recipes fall back to a readable bean/object/icon blueprint instead of going blank.

No API key, backend, CDN, or external service is required.

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


## v6 — Specific Blueprint Grammar

This build expands ShapeSprout from generic blueprint cards into a subject-aware construction system.

### New controls
- Exact subject picker with random-by-family fallback.
- More vibes: cozy, spooky-cute, retro mascot, kawaii sticker, minimal logo, sporty badge, fancy boutique.
- More skill focuses: construction breakdown, cute proportions, beginner texture, badge layout, negative space, limited palette, and three variations.

### Blueprint improvements
- Blueprints now combine subject + vibe + skill focus.
- Badge/icon prompts no longer share one generic badge diagram.
- Specific icon containers include shield, stamp, ribbon medal, patch, scalloped seal, coffee seal, book mark, crown badge, rocket patch, wave emblem, palette mark, cat icon, and leaf emblem.
- Missing subjects fall back to family-specific recipes rather than blank panels.

All files remain root-level for simple static deployment.


## v7 — Learning Coach Upgrade

This build turns ShapeSprout from a prompt generator into a more structured drawing practice companion.

### Added
- Learning path selector: Guided session, Daily practice, Procreate sidekick, Logo + icon lab, Character builder, Redraw coach.
- New skill focuses: Memory mode, Redraw ladder, Procreate layers, Self critique, Shape vocabulary.
- More subject options across objects, foods, blobs, shapes, icons, and badges.
- More vibes: Playful toy, Chunky sticker, Calm minimal, Weird-cute.
- Each mission now includes:
  - 2-minute warmup
  - Draw this three ways: character, icon, badge/sticker
  - Why this works
  - Common beginner mistake + fix
  - Procreate layer plan
  - Self-check checklist
  - Next best exercise
- Blueprint View now includes a Learning Coach panel so the diagram teaches the concept, not just the shape.

The service worker cache was bumped to `shapesprout-studio-learning-coach-v7`.


## Expansion v8 notes

This build visibly expands the learning controls:
- 8 subject families: objects, foods, shapes/blobs, logos/app icons, badges/seals/patches, mascots, nature sprites, and lettering marks.
- 200+ exact subjects, including mascot roles, badge types, lettering marks, and nature sprites.
- 25 vibe styles, including cottagecore, celestial, heroic, ocean cute, cute robot, soft goth, candy shop, editorial clean, and handmade stamp.
- 27 skill focuses, including object readability, sticker composition, container hierarchy, line confidence, small-size readability, motif building, pose/gesture, texture restraint, color/value, and logo family.

If a previous build appears, reload twice after deployment or clear site data so the updated service worker cache activates.
