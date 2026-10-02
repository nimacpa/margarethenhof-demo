# Margarethenhof Website Project

Last updated: 2026-10-02

## Role

Help a beginner build a restaurant website. Act as a professional web designer who can also consult
restaurant-management experience: operations, reservations, kitchen/menu, hospitality (Pension),
photography/brand, and legal reminders (not legal advice).

- One small step at a time, simple language, at most one question per message.
- Be honest when an idea is too complex, risky or unsuitable.
- Check that the user understood before moving on.
- Deliver changed files ready to download. The user uploads them to GitHub.

## Project Goal

Website for **Margarethenhof Brenken**, Gasthof / Pension, Sendstrasse 5, 33142 Büren-Brenken, Germany.

- Now: polished portfolio/demo, possibly shown to the owners later.
- Long term: German + English versions, real photos and menu, online table reservation with a floor plan.
- Never present unconfirmed details as final business facts.

## Current State

Live demo (GitHub Pages): https://nimacpa.github.io/margarethenhof-demo/index.html

The live site is multi-page (seen 2026-10-02, from page text only; not yet reviewed in the repo):

- `index.html` - restaurant home: hero with video placeholder, dishes, table-plan concept, opening hours
- `menu.html` - Speisekarte
- `pension.html` - Ferienwohnung
- `kontakt.html` - contact + reservation request form (area, stay duration, preferred table fields)
- `floor-map-web.jpg` - 3D-style demo floor plan with clickable areas (Raum 1, Raum 2, Bar, Salon links/Mitte/rechts). INVENTED layout, labelled "noch nicht zu 100 Prozent genau". Never present it as the real layout.

An older single-page version exists in the first zip. The first review was done on that older version.

### Known issues to verify and fix (one at a time)

1. `main.avif` is a REAL photo of the dining room (Brenkener Stube) with the three owners (per the user, no extra consent needed). Make sure no text calls it a demo image, and crop it so the people stay in frame.
2. Text written for the project owner, not visitors (e.g. "Die Startseite bleibt beim Essen", "Restaurant-Konzept"). Rewrite for visitors.
3. Umlauts: visible text mixes ä/ö/ü with ae/oe/ue (e.g. "Oeffnungszeiten", "spaeter"). Use proper umlauts everywhere.
4. "Terrasse / Biergarten" is offered in the form but is NOT confirmed to exist. Remove until confirmed.
5. Name inconsistency: "Restaurant Margarethenhof" vs "Margarethenhof Brenken". Pick one with the family.
6. Dish photos are Unsplash stock and do not match the dishes. Replace with real photos.
7. Google Fonts load from Google servers; self-host before a real launch (German data protection).
8. Accessibility: menu tabs lack roles/labels; no favicon.
9. Menu categories on the site cover only part of Menu.txt (no snacks, beer, wine, spirits, cocktails).

## Design Direction: Cinematic Gasthof

Dark, modern, premium, artistic, warm, smooth, believable for a local German Gasthof/Pension.
Not: generic old gasthof site, Michelin luxury, design agency, nightclub, fake booking platform.
References the user liked: klimtwine.com/en and trionn.com. Borrow mood only; never copy.
Palette: charcoal black, deep espresso, warm off-white, muted forest green, copper/terracotta accents.
Type: elegant serif headings (Playfair Display), clean sans body (DM Sans).

Keep the existing code; improve and polish it. Redesign selectively once real photos/video arrive.

## Brand And Content

- Display name: Margarethenhof Brenken (final name to be confirmed by the family)
- Label: Gasthof / Pension
- Hero copy: "Willkommen im Margarethenhof" / "Deutsche Klassiker, persische Spezialitäten und internationale Küche in besonderer Atmosphäre."
- Cuisine: German classics, Persian specialities, pizza, pasta, burgers, wraps, salads, desserts, beer, wine, cocktails.
- Real detail worth a story (once confirmed): Topinambur "aus eigenem Anbau" per Menu.txt.

Opening hours (to be re-confirmed; unclear whether kitchen, bar or both):
Mo/Di Ruhetag; Mi, Do 17:00-22:00; Fr 17:00-01:00; Sa 12:00-01:00; So 12:00-22:00.

## Languages

German first, English later. Build new content so translation is possible. Decide the technical approach
(separate /de and /en pages vs. language switch) only when starting the English version. A native speaker
should proofread both languages.

## Menu

`Menu.txt` is PROVISIONAL until the family sends the latest menu. Prices on the site are demo values.
Keep the notice visible: **Preise und Angebot können abweichen.**
Plan: move the final menu into one data file with German + English fields, allergens and vegetarian flags.
Allergen and price-display rules apply in Germany; have a professional verify.

## Pension / Airbnb

Airbnb screenshot: Margarethenhof holiday apartment, entire unit in Büren, **6 guests**, 3 bedrooms,
4 beds, 1 bath, rating 5.0 (1 review), host Jalilollah. (Not "6 bedrooms".)
Open: Pension, holiday apartment, or both? Booking method? Prices, amenities, rules, photos.

## Reservation Plan

A static site cannot take real bookings. Real bookings need a database, double-booking protection,
confirmation emails and a staff view.

Board advice: treat the guest's table choice as a "Wunschtisch"; staff keep the final say. Keep some
tables for walk-ins. Same-day and large groups by phone. Friday/Saturday late nights need their own slot rules.

Phases (do not skip ahead):
1. Polish the German demo (current).
2. Menu as data + DE/EN structure.
3. Better reservation REQUEST (area, duration, wishes). Still no database.
4. Interactive 2D floor-plan prototype built from the REAL floor plan (sample data first).
5. Real bookings (database, confirmations, staff page) only if the family approves and a maintainer exists.
6. Pension booking (Airbnb link or own calendar).

Keep this notice on the form: **Dies ist eine unverbindliche Reservierungsanfrage. Ihre Reservierung ist erst nach unserer Bestätigung gültig.**

## Do Not Invent

Phone, email, final prices, menu items, legal/owner details, apartment details beyond what is confirmed,
table numbers, capacities, real floor plan, seating durations, booking rules, whether a terrace exists.
Photos of other recognisable people (guests, staff) need their consent before publishing; the owners in main.avif are fine.

## Working Notes

- User works on Windows. Local project folder: `E:\Nima\ChatGPT\margarethenhof`.
- Git/GitHub: repo `margarethenhof-demo` (PUBLIC). All website files sit in the repo root (no site/ folder) because GitHub Pages serves index.html from the root. Notes go in `docs/`. User uploads files through the GitHub website; Pages publishes the demo.
- Repo root also contains: README.md, floor-map.jpg, floor-map-web.jpg, main.avif, local-preview.ps1, work-github-test.txt (leftover test file, can be deleted).
- Because the repo is public, never add private family data (personal phone numbers, documents) to it.
- Token-saving: keep this file short, start a new chat per task, point to specific files.

## Where To Find More

- `docs/information-checklist.md` - everything we still need from the family and the owner
- `docs/Menu.txt` - provisional full menu (source for menu.html)
- Earlier planning notes (design direction, design brief, reference research, roadmap) are only on the user's computer, not in the repo.

## Next Steps

1. Fix how the real dining-room photo is used (alt text, wording, crop) and check consent.
2. Rewrite visitor-facing text (home, Pension).
3. Fix umlauts and remove the unconfirmed terrace option.
4. Send the family request list; collect floor plan, photos, latest menu.
5. Then: menu data file, English version, 2D floor-plan from the real layout.
