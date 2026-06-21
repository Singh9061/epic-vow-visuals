## Sana & Vikram album — add uploaded photos

Add the 5 uploaded wedding photos to the **Sana & Vikram** album (currently a placeholder using Unsplash stock images).

### Steps
1. Upload all 5 images via `lovable-assets` CLI from `/mnt/user-uploads/` → create `.asset.json` pointers in `src/assets/sana-vikram/sv_0.jpg.asset.json` … `sv_4.jpg.asset.json`.
2. In `src/components/Albums.tsx`:
   - Import the 5 new asset JSONs.
   - Create `sanaVikramPhotos` array.
   - Update the `sana-vikram` entry in `albums`: `cover` = first photo, `count` = 5.
   - Update `albumPhotos()` to return `sanaVikramPhotos` for `id === "sana-vikram"`.

### Note
Only 5 photos were uploaded (album previously showed 20). The album will now show **5 photos**. If you want 20, please upload 15 more.
