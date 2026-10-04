# El Toro Loco — Whittier

Production-ready marketing website for El Toro Loco, a Mexican restaurant at 13345 Telegraph Rd #D in Whittier, California. The site is mobile-first and focuses on menu discovery, calls, directions, real restaurant visuals, party orders, and local search visibility.

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To verify a production build:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Project structure

- `src/app/` — App Router pages, route metadata, sitemap, robots, and global styles
- `src/components/` — shared navigation, footer, calls to action, and location components
- `src/data/business.ts` — the canonical address, phones, email, hours status, domain, map links, and social placeholders
- `src/data/menu.ts` — confirmed menu items, categories, supported formats, and nullable prices
- `src/data/gallery.ts` — gallery assets, labels, and accessible alt text
- `src/lib/metadata.ts` — shared route metadata helper
- `public/images/` — selected web-ready copies of the source images
- `images/` — original source assets; do not edit or remove these files
- `images/source-menu/` — original current physical-menu photos supplied directly by the restaurant owner

## Updating restaurant information

### Hours

Edit the `hours` entries and `hoursPublic` summary in `src/data/business.ts`. Visible hours and the Restaurant JSON-LD `openingHoursSpecification` are generated from this centralized data.

### Phone numbers, address, or email

Edit the corresponding fields in `src/data/business.ts`. Phone records include both display text and the `tel:` link.

### Menu items

Edit `src/data/menu.ts`. Keep `price: null` when the current price is not confirmed.

The files in `images/source-menu/` are source/reference material: the original current physical-menu photos supplied directly by the restaurant owner. Current menu pricing and formats were transcribed from these owner-supplied images. Do not modify, rename, crop, or overwrite the files. Future menu changes must be verified against a new owner confirmation or updated photos placed in `images/source-menu/`.

### Social links

Add confirmed URLs in the `social` object in `src/data/business.ts`, then add conditional links in the footer or header. Never add guessed handles.

### Images

Keep the originals in `images/` untouched. The additional restrictions documented above apply to `images/source-menu/`. For other approved images, copy selected files to `public/images/` with descriptive names, then update `src/data/gallery.ts` or the relevant page. Preserve aspect ratios and use `next/image`.

## Deployment to Vercel (later)

No deployment or DNS configuration is included in this repository.

1. Push the repository to the Git provider of your choice.
2. Import it into Vercel as a Next.js project.
3. Run a production build in Vercel and review the preview URL.
4. In Vercel, add `eltorolocowhittier.com` and `www.eltorolocowhittier.com` under project domains.
5. In Cloudflare DNS, add only the records Vercel shows for those domains.
6. Keep Cloudflare Registrar nameservers and verify both apex and `www` behavior before announcing the site.

Always use Vercel’s current domain instructions at deployment time; requested DNS records can change.

## Google Analytics 4 (later)

No analytics or tracking is active. Once a real GA4 measurement ID exists, add it through a production environment variable and load the Google tag with `next/script` only after the owner approves tracking and any required privacy disclosures.

## Google Search Console (later)

After deployment, create or open the property for `https://eltorolocowhittier.com`. Verify it using a Cloudflare DNS TXT record or a confirmed HTML verification token added through Next.js metadata. Submit `https://eltorolocowhittier.com/sitemap.xml` after the production domain is live.

## Content safeguards

Hours, prices, social URLs, ratings, and review counts can change. Keep them centralized, verified, and current. Do not add unconfirmed history, awards, delivery options, reservation claims, or service details.
