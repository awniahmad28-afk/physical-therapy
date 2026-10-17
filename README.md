# Physical Therapy Clinic: Website Design Concepts

Open **`index.html`** in a browser to see the designs side by side with live thumbnails.

## MOVEWELL (your clinic)

`designs/movewell/movewell.html` is built from the MOVEWELL clinic itself. It uses the logo (redrawn as a crisp graphic) and the tagline "Transforming Pain into Power". Colours come from the rooms: logo navy `#2A3D7E`, wall linen `#F6F4F0`, herringbone floor `#ECEAE6`, walnut `#7A4E36`, curtain peach `#E2B08C` and the poster glow `#EE7A2A`.

- **Hero:** a vertical 9:16 reel in a phone-style frame on a herringbone "floor" panel. It's currently a montage made from clinic photos (`media/movewell/movewell-hero.*`). Replace it with a real Instagram reel.
- **Photos:** `media/movewell/*.jpg` were cropped from the clinic's Instagram stories. Swap in the original photos for sharper images.
- **Still to add:** team portraits, WhatsApp and phone numbers, address and opening hours (marked "add" on the page).

## The Video Collection

Four designs in `designs/video/`, each with a different look and layout, and each opening with a video hero. Media paths start with `../../media/`. Until you add your own footage, the videos play ambient demo films from `media/demo/` (WebM + MP4). Replace each `<source>` and `poster`; an MP4 alone is fine.

| Design | Look | Colors | Fonts | Video hero | Signature sections |
|---|---|---|---|---|---|
| **Meridian** `v1-meridian.html` | Swiss clinical precision | Paper `#F4F3EF`, Ink `#111317`, Cobalt `#2340D8`, Mint `#2F9A6E` | Archivo / IBM Plex Mono | Video in a 7-column grid cell beside the headline, with a "next available" slots panel on top (1920×1080) | Stats ticker, clickable body map, treatment index table, example progress chart, 3-step booking |
| **Tide** `v2-tide.html` | Soft, coastal, rounded | Sea `#12343B`, Mist `#E4EDEA`, Sand `#F3EDE3`, Sun `#E8B04B` | Young Serif / Outfit | Full-screen video in a rounded window with a floating glass booking card (1920×1080) | Sentence with inline pill images, rounded bento, swipeable 8-week journey, pool specs, chat-bubble testimonials |
| **Nord** `v3-nord.html` | Scandinavian calm | Birch `#F1EFEA`, Slate `#2F3A40`, Fjord `#5B7C8D`, Pine `#3E5A4C` | Hanken Grotesk / Newsreader | Triptych of three vertical videos; the hovered panel widens (3 × 1080×1920) | Fixed left sidebar, expanding treatment rows, journal, people list, month calendar booking |
| **Vertex** `v4-vertex.html` | Bold, typographic | Bone `#EEE9E2`, Oxblood `#4A1C2B`, Blush `#D9B8A9`, Black `#121212` | Bricolage Grotesque / Geist | Video shows only inside giant "MOVE AGAIN" letters, which grow on scroll until the film fills the screen (1920×1080) | Marquee, sticky stacking treatment cards, giant numbers, hover-portrait team list, fill-in-the-blanks booking |

All four have a pause/play control and keep videos paused for visitors whose device asks for reduced motion.

## The Elegant Collection

Three classic, refined designs in `designs/elegant/`, built on the editorial style of Design 4 (Atelier). Media paths from these files start with `../../media/`.

| Design | Mood | Colors (hex) | Fonts | Layout | Key media zones |
|---|---|---|---|---|---|
| **Maison** `e1-maison.html` | Formal, timeless, hotel-like | Ivory `#F6F1E9`, Ink `#1C1A17`, Champagne `#B89B6A`, Taupe `#D9CFC0` | Bodoni Moda / Jost | Centred monogram nav; framed 2:1 hero with an ivory card on top; centred philosophy; 2×2 treatments; dark film band (2.39:1 ▶) with three figures; arched portraits; centred underline booking form | Hero ▣/▶ 2400×1200 (2:1), treatments ▣ 1250×1000 (5:4), film ▶ 2560×1072, portraits ▣ 900×1200 (3:4) |
| **Nocturne** `e2-nocturne.html` | Dark, discreet, exclusive | Forest `#14201B`, Cream `#EDE6D8`, Brass `#C2A36B`, Sage `#3A4A42` | Italiana / Figtree | Split-screen hero (text left, full-height ▣ right); statement; ruled treatment list with hover-reveal thumbnails; full-bleed 21:9 ▶ film; ▣ image + 3-stage method; quote band; 4 tall portraits; split booking (dark ▣ panel / cream form) | Hero ▣/▶ 1200×1600 (3:4), thumbs ▣ 800×600, film ▶ 2520×1080 (21:9), method ▣ 1200×1500, portraits ▣ 800×1200 (2:3) |
| **Linen** `e3-linen.html` | Soft, airy, welcoming | Paper `#FBF9F6`, Charcoal `#2B2926`, Clay `#A88B76`, Blush `#F1E9E1` | Instrument Serif / Instrument Sans | Headline left with two overlapping ▣ right; blush philosophy band with drop cap; staggered triptych of tall ▣; portrait ▶ + facts; press wordmarks; quote + portrait; dark booking band with a day/time picker | Hero ▣ 1200×1500 + ▣ 800×800, triptych ▣ 1000×1500 (2:3), studio ▶ 1080×1350 (4:5), portrait ▣ 900×1200 |

### Video heroes and scroll animation

- **Maison** and **Nocturne** open with a full-screen, muted, looping **video hero** and a pause/play button. Until you add your own film they play a short demo of soft window light (`media/demo/*-hero.webm` / `.mp4`). Swap the `<source>` paths and the `poster` for your footage: 1920×1080, 10–20 s, MP4 (H.264), under 10 MB.
- **Linen** (`e3-linen.html`) **animates on scroll**: the headline rises line by line, photos wipe in like a curtain, text fades up, figures count up, press names drift past, and a hairline tracks reading progress.
- **Atelier** (`e4-atelier.html`, an animated version of Design 4) **animates on scroll**: letter-by-letter headline, the hero photo opens to full width, treatments slide sideways in a pinned gallery, the quote lights up word by word, and a section counter follows you down the page. On phones the treatments become a swipeable row.
- All motion is switched off for visitors whose device asks for reduced motion. The page stays complete and the video stays paused.

**Which suits you:** Maison for a traditional private practice; Nocturne for an exclusive or city-centre clinic; Linen for a boutique physio and Pilates studio or women's health; Atelier for the boldest editorial look.

---

## Earlier concepts

The first five concepts are in `designs/`.

Legend: ▣ = image zone, ▶ = video zone. Every zone is a placeholder you can replace with your own media (see [How to add your own media](#how-to-add-your-own-photos-and-videos)).

---

## 01 · Serene Clinic: `designs/01-serene-clinic.html`

**Concept:** Calm, clean and clinical. Soft teal and sage feel like a quiet, well-run clinic. The layout is reassuring and conventional and easy for any patient to scan.

| Role | Color | Hex |
|---|---|---|
| Primary | Deep teal | `#2A7F8E` |
| Secondary | Sage | `#A8C3B4` |
| Accent | Soft coral | `#F28C6B` |
| Background | Mist white | `#F7FAF9` |

**Typography:** DM Serif Display (headings) · Inter (body)

**Layout:**
1. Sticky header: logo, links, "Book" pill
2. **Hero, split screen:** text and CTAs on the left, ▣ image on the right with a floating "next available" card
3. Insurance logo strip (full width)
4. **Services:** 3×2 card grid, ▣ image per card
5. **About, split:** ▶ clinic tour video on the left, checklist on the right
6. Process: 4 numbered steps in a row
7. Testimonials: 3 cards with ▣ round avatars
8. **Booking and contact:** rounded teal band with the form on the left, hours and ▣ map on the right
9. Footer: 4 columns

**Media zones:**
| Zone | Type | Size | Ratio |
|---|---|---|---|
| Hero | ▣ | 1200×1500 | 4:5 |
| Service cards (×6) | ▣ | 800×600 | 4:3 |
| Clinic tour | ▶ (+ poster) | 1920×1080 | 16:9 |
| Testimonial avatars (×3) | ▣ | 200×200 | 1:1 |
| Map / building | ▣ | 800×600 | 4:3 |

---

## 02 · Momentum Sport: `designs/02-momentum-sport.html`

**Concept:** Bold, dark and high-energy, like a performance brand. Electric lime, skewed buttons and angled sections give a sense of speed. It's built around video and results.

| Role | Color | Hex |
|---|---|---|
| Primary | Electric lime | `#C6F432` |
| Secondary | Performance blue | `#1F6FEB` |
| Accent | Signal red-orange | `#FF4D2E` |
| Background | Carbon | `#0E1116` |

**Typography:** Oswald (headings, uppercase) · Barlow (body)

**Layout:**
1. Transparent header over the hero
2. **Hero:** full-bleed ▶ background video, huge stacked headline at the bottom left
3. Stats strip: skewed lime band with 4 numbers
4. **Services, bento grid:** mixed tile sizes (1 large ▣, 1 wide ▣, 1 small ▣, plus color tiles)
5. **Performance lab:** angled panel, ▣ image left, progress bars right
6. **Athlete stories:** horizontal-scroll row of vertical ▶ reels
7. Programs: 3 pricing-style columns
8. **Booking:** angled red-orange band, headline left, inline form right
9. Footer: dark, multi-column

**Media zones:**
| Zone | Type | Size | Ratio |
|---|---|---|---|
| Hero background | ▶ muted loop ≤15s | 1920×1080 | 16:9 |
| Bento large tile | ▣ | 1200×1200 | 1:1 |
| Bento wide tile | ▣ | 1200×600 | 2:1 |
| Bento small tile | ▣ | 800×800 | 1:1 |
| Performance lab | ▣ | 1500×1000 | 3:2 |
| Athlete reels (×4) | ▶ | 1080×1920 | 9:16 |

---

## 03 · Warm Hearth: `designs/03-warm-hearth.html`

**Concept:** Warm, friendly and family-centred. Terracotta and butter-yellow tones, rounded shapes and wavy dividers feel welcoming to kids, parents and grandparents alike.

| Role | Color | Hex |
|---|---|---|
| Primary | Terracotta | `#C8664A` |
| Secondary | Sage green | `#7A9E7E` |
| Accent | Mustard | `#E9B44C` |
| Background | Cream | `#FFF8EF` |

**Typography:** Fraunces (headings) · Nunito (body)

**Layout:**
1. Floating pill-shaped nav
2. **Hero, centered:** headline and CTAs above a 3-photo **organic collage** (blob/arch crops)
3. Wave divider
4. **Who we help:** 4 pastel icon tiles (Kids, Parents, Adults, Seniors)
5. **Services:** 2-column rounded cards, ▣ image beside the text
6. **Team:** 4 circular ▣ portraits
7. **Video:** centered, white-framed ▶ with a play badge on a mint band
8. Testimonial: ▣ family photo on the left, large quote on the right
9. FAQ accordion
10. **Booking:** soft peach rounded card (text and form)
11. Footer with a wave top

**Media zones:**
| Zone | Type | Size | Ratio |
|---|---|---|---|
| Hero collage | ▣ ×3 | 800×800 / 960×1200 / 800×800 | 1:1 / 4:5 / 1:1 |
| Service cards (×4) | ▣ | 800×600 | 4:3 |
| Team portraits (×4) | ▣ | 600×600 | 1:1 |
| Welcome video | ▶ | 1920×1080 | 16:9 |
| Testimonial photo | ▣ | 900×900 | 1:1 |

---

## 04 · Atelier Editorial: `designs/04-atelier-editorial.html`

**Concept:** Minimal, premium and laid out like a magazine. Oversized serif type, generous white space and monochrome portraits feel like a high-end boutique studio. It's quiet, confident and photography-led.

| Role | Color | Hex |
|---|---|---|
| Primary | Ink | `#141414` |
| Secondary | Stone | `#E8E4DD` |
| Accent | Olive | `#6B7A3A` |
| Background | Paper | `#FAFAF7` |

**Typography:** Cormorant Garamond (headings) · Manrope (body)

**Layout:**
1. Minimal text nav
2. **Hero:** giant serif headline, then a **full-width cinematic ▣ image** (21:9)
3. Approach: 1/3 label + 2/3 large statement
4. **Treatments:** numbered editorial list (01–04) with rule lines and small ▣ thumbnails
5. **Zig-zag:** ▣ portrait image + text, then text + ▶ portrait video
6. Pull quote: full-width stone band
7. **Practitioners:** 3 tall monochrome ▣ portraits
8. **Booking, split screen:** black statement panel on the left, minimal underline form on the right
9. Footer: huge wordmark

**Media zones:**
| Zone | Type | Size | Ratio |
|---|---|---|---|
| Cinematic hero | ▣ (or ▶) | 2400×1029 | 21:9 |
| Treatment thumbs (×4) | ▣ | 600×400 | 3:2 |
| Studio feature | ▣ | 1200×1500 | 4:5 |
| Method feature | ▶ muted loop | 1080×1350 | 4:5 |
| Practitioners (×3) | ▣ (auto-grayscale) | 900×1200 | 3:4 |

---

## 05 · Clarity Care: `designs/05-clarity-care.html`

**Concept:** Accessible, high-contrast and reassuring. Navy and amber, a hyper-legible font, large tap targets and phone-first CTAs are built for older adults and their caregivers. It meets WCAG-friendly contrast and includes a working text-size toggle.

| Role | Color | Hex |
|---|---|---|
| Primary | Navy | `#1B365D` |
| Secondary | Sky blue | `#4A90D9` |
| Accent | Amber | `#F5A623` |
| Background | White | `#FFFFFF` |

**Typography:** Lexend (headings) · Atkinson Hyperlegible (body, 19–22px)

**Layout:**
1. **Utility bar:** phone number, hours, **A / A+ text-size toggle**
2. Header with large nav and a "Book appointment" button
3. **Hero, 50/50 split:** big headline, "Call" and "Book online" buttons, trust badges; ▣ image on the right
4. **"How can we help?":** 3×2 large bordered tiles with icons
5. **First visit:** numbered 3-step list on the left, ▣ image on the right
6. **Explainer:** ▶ video with captions on the left, text and accessibility note on the right
7. Insurance: pill list
8. Testimonials: 2 large cards with ▣ photos
9. **Booking:** navy band with a large labelled form
10. **Location:** ▣ map/entrance on the left, parking and accessibility details on the right
11. Footer

**Media zones:**
| Zone | Type | Size | Ratio |
|---|---|---|---|
| Hero | ▣ | 1500×1000 | 3:2 |
| First visit | ▣ | 1200×1500 | 4:5 |
| Explainer | ▶ + `.vtt` captions | 1920×1080 | 16:9 |
| Testimonial photos (×2) | ▣ | 400×400 | 1:1 |
| Map / entrance | ▣ (or Maps iframe) | 1600×900 | 16:9 |

---

## Comparison

| Design | Style | Layout type | Best suited audience | Media customisation |
|---|---|---|---|---|
| 01 Serene Clinic | Calm, clinical, light | Split hero, card grid | General outpatient, ortho, women's health | ★★★★★ Very easy |
| 02 Momentum Sport | Bold, dark, energetic | Full-bleed video, bento, angled bands | Sports rehab, athletes | ★★★☆☆ Needs good video |
| 03 Warm Hearth | Warm, playful, friendly | Centered hero + collage, rounded cards | Pediatric, family | ★★★★☆ Forgiving crops |
| 04 Atelier Editorial | Minimal, luxury, editorial | Oversized type, list, zig-zag, split | Boutique, private pay | ★★★☆☆ Needs pro photography |
| 05 Clarity Care | Accessible, trustworthy | Utility bar, big tiles, steps | Elderly, neuro, Medicare | ★★★★★ Very easy |

---

## How to add your own photos and videos

Every placeholder uses the same pattern. The striped box and label disappear automatically as soon as `src` is filled in:

```html
<!-- before -->
<figure class="media" style="--ar:4/5" data-label="HERO IMAGE 1200 × 1500 · 4:5">
  <img src="" alt="">
</figure>

<!-- after -->
<figure class="media" style="--ar:4/5" data-label="HERO IMAGE 1200 × 1500 · 4:5">
  <img src="../media/hero.jpg" alt="Therapist stretching a patient's shoulder">
</figure>
```

1. Put your files in `media/` (for example `media/hero.jpg` or `media/tour.mp4`).
2. In the design file, search for `MEDIA ZONE` or `src=""`.
3. **Images:** set `src="../media/your-file.jpg"` and write a meaningful `alt`.
4. **Videos:** set `src="../media/your-file.mp4"` and `poster="../media/your-poster.jpg"`. Keep background videos `muted autoplay loop playsinline`.
5. **Swap media type:** replace the `<img>` inside a `<figure>` with a `<video>` (or the other way round). The frame keeps its size.
6. **Change the shape:** edit `--ar` (for example `--ar:1/1`). Media is cropped to fill the frame (`object-fit: cover`).
7. **CMS:** each `<figure class="media">` is one independent slot. In WordPress, Webflow or Squarespace, map each slot to an image or video field with the same aspect ratio.

**File tips:** JPG/WebP at the listed size, under about 300 KB. MP4 (H.264) under 10 MB, with hero loops under 15 s. Add captions (`.vtt`) to talking videos.

---

## Recommendation by clinic type

- **Sports rehab:** **02 Momentum Sport**. Video, stats and athlete stories sell outcomes.
- **Elderly care / Medicare / home health:** **05 Clarity Care**. It has large text, a phone-first layout and accessibility details.
- **Pediatric / family:** **03 Warm Hearth**. Warm, playful and reassuring for parents.
- **General outpatient:** **01 Serene Clinic**. Neutral and trustworthy, and it scales to many services.
- **Boutique / private pay / Pilates:** **04 Atelier Editorial**. Premium and photography-led.
