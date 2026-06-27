# PRODUCT.md — BICA

## Business
**Name:** bica ("little cafe")
**Type:** Neighborhood coffee shop + experiential events venue
**Location:** 3569 Adams Ave, San Diego CA 92116 (Normal Heights)
**Hours:** 6:30am–4pm, 7 days a week
**Contact:** info@bica-sd.com | @bica_sd
**Primary goal:** Keep regulars close. Pull in curious newcomers without overselling it.

## Brand Character
"If you know, you know." Quaint, community-rooted, unexpectedly wild. Wood picnic tables on the patio. Daytime cortados. Evening supper clubs with live fish breakdowns. Controlled chaos. The tagline on their events page: *"This isn't a dinner."*

Authenticity over polish. Anti-precious. Alive.

## Register
`brand` — marketing/landing page, design IS the product

## Design Read
*Daytime neighborhood cafe in Normal Heights. Audience: local regulars, SD food/arts community, in-the-know crowd. Aesthetic: clean concrete + natural wood + handmade charm. High contrast, airy, honest. Like the space: nothing extra, nothing missing.*

## Dials
- `DESIGN_VARIANCE: 6` — slightly asymmetric layouts, varied type scale, but grounded and readable
- `MOTION_INTENSITY: 3` — subtle only: scroll fades, gentle hovers. No choreography.
- `VISUAL_DENSITY: 5` — balanced. Photos carry the warmth. Type stays tight.

## Color Strategy
**Restrained light.** The space is a daytime cafe — concrete walls, natural wood, plants, San Diego sunlight. Black wood paneling as accent. Clean off-white background carries the concrete/airy feeling; near-black does all the heavy lifting. Warmth lives in the photography, not the background tint.

Physical scene: Someone walking Adams Ave on a sunny Saturday morning, pulls up BICA on their phone, sees the patio and wants to grab a coffee.

| Role | Token | OKLCH | Notes |
|------|-------|-------|-------|
| Background | `--color-bg` | `oklch(0.97 0.00 0)` | True clean off-white, not warm-tinted |
| Surface | `--color-surface` | `oklch(0.94 0.00 0)` | Subtle panel step |
| Ink | `--color-ink` | `oklch(0.10 0.01 250)` | Near-black with faintest slate hint |
| Muted | `--color-muted` | `oklch(0.50 0.00 0)` | Neutral gray |
| Accent | `--color-accent` | `oklch(0.60 0.12 145)` | Sage/olive green — plants, outdoors, nature |
| Border | `--color-border` | `oklch(0.88 0.00 0)` | Light neutral divider |

## Typography
- **Display:** Bricolage Grotesque — condensed grotesque with character; handbuilt not corporate
- **Body:** Inter — clean, legible, gets out of the way
- Pair on contrast axis (geometric condensed display + humanist body)
- Hero ceiling: `clamp(3rem, 8vw, 6rem)`
- Letter-spacing floor on display: `-0.03em`
- `text-wrap: balance` on h1–h3

## Logo
Horizontal fish illustration. Keep as-is. Used in nav (left) and footer. Do not alter, recolor, or reinterpret.

## Pages
1. **Home** — hero (type-forward, no lifestyle photo), about blurb, upcoming events preview (3 cards), hours/location bar, email signup, footer
2. **Events** — full listing, date-forward layout, dense, filterable by month
3. **Shop** — preorder merch (scaffold clean, placeholder products)
4. **Private Events & Catering** — brief pitch + inquiry form

## Stack
Next.js 15 (App Router) + Tailwind v4 + Motion (Framer Motion)

## Anti-Patterns (banned for this project)
- No beige/cream/warm-tinted backgrounds
- No gradient text
- No testimonials / "why choose us" sections
- No lifestyle hero photography (type as hero texture instead)
- No em-dashes anywhere in copy
- No numbered section eyebrows (01 / 02 / 03)
- No identical card grids
- No side-stripe borders on cards

## Component Inventory
- Sticky minimal nav (logo left, 3 links right, transparent over hero)
- Type-forward hero (large Bricolage Grotesque, dark bg, accent color pop)
- About blurb (asymmetric, one column offset)
- Events preview strip (3 upcoming events, date + name + short descriptor)
- Hours/location bar (single line, clean)
- Email signup (minimal — no "marketing materials" language)
- Events listing page (dense, date-forward rows or cards)
- Footer (logo, address, hours, Instagram link, email)
