# MOVEWELL Physiotherapy website

A static five-page website in the Maison style, built from the MOVEWELL clinic's own logo, colours and photos. Open `index.html` in a browser. No build step is needed; upload the whole `docs/` folder to any web host.

| Page | File |
|---|---|
| Home | `index.html` |
| Treatments | `treatments.html` |
| Red light therapy | `red-light.html` |
| The clinic (gallery + team) | `clinic.html` |
| Contact & booking | `contact.html` |

Shared styles are in `assets/style.css` and shared behaviour in `assets/site.js` (mobile menu, hero video, booking form).

## Replacing media
- **Hero video:** `media/hero-wide.mp4/.webm` (16:9, shown on wide screens) and `media/hero-tall.mp4/.webm` (9:16, shown on phones), plus their `-poster.jpg` stills. Replace them with your own footage under the same names. Both are currently montages made from clinic photos.
- **Photos:** the `media/*.jpg` files were cropped from Instagram story screenshots. Original photos will look sharper. Keep the same file names, or update the `src` paths.
- **Team portraits:** in `clinic.html`, replace each placeholder `.ph` block with `<div class="media"><img src="media/your-photo.jpg" alt="Name"></div>`.

## Still to add
- WhatsApp and phone numbers, address and opening hours (marked "Add …" on the contact page and in the footer of every page).
- Team names, titles and photos.
- Connect the booking form to email or WhatsApp. It currently shows a confirmation message only.
