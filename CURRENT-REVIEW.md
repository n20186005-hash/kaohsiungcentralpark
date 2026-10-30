# Kaohsiung Central Park content review

Public guide reviewed on 2026-10-29 (Los Angeles date). This is an independent, unofficial nonprofit tourism and educational guide, not a park or MRT operator.

Active bilingual content is shared in `src/data/reviewed-guide.ts` and `src/components/ReviewedGuide.astro`. Previous section/data modules remain as user source history but are no longer imported by public pages; do not reactivate unverified historical schedules, accessibility promises or photo credits from those modules.

The city park page at https://khh.travel/zh-tw/attractions/detail/336/ is marked updated 2023-11-29 and lists 12.7 hectares, landscape features and daily 00:00–23:59 access. Its address is 文橫一路5巷, different from the Google Maps snapshot's 中山一路11號, also a station address. These are reference points, not surveyed boundaries or a guarantee of every entrance/facility being open. The city park page map link contains coordinates 22.6242,120.30185, explicitly attributed as a published reference point rather than a newly surveyed entrance.

Current admission, daily shows, event schedules, parking rates, complete accessibility and temporary restrictions remain unverified. Use the linked city and MRT sources. Google Maps rating/count are a manual 2026-10-29 snapshot, not automatic synchronization or site-collected reviews.

All fifteen earlier JPEG deliverables were removed because exact source-file provenance and complete rights evidence could not be verified. This does not clear their photographic or subject rights. Current SVG and derived JPEG are original conceptual artwork, CC0 1.0, clearly labelled as neither a photograph nor a surveyed map. No station architecture, public artwork or identifiable people are reproduced.

Weather requests happen in the browser for fixed coordinates, using Open-Meteo. Stale, invalid or failed responses clear numerical output; no climatology fallback is labelled as live weather. Cloudflare hosting and possible independent Web Analytics are disclosed separately; no Google Analytics is installed by the guide.

## Local checks and preview

Keep Node 22.13 and pnpm 10.4.1 with the exact existing dependency versions and lockfile. Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm run build`, then `npx wrangler deploy --dry-run`. Preview the actual native wrapper with `npx wrangler dev --port 8940`.

The build runner temporarily hides the root Wrangler config to stop the adapter importing the post-build SSR wrapper before its generated entry exists, restores the root config even on ordinary build failure, and removes generated deploy redirection configs. The root wrapper remains the deployment entry, with ASSETS and worker-first routing for canonical redirects, headers and SSR 404 handling. The configured project is `kaohsiungcentralpark`; no new domain or service binding was added.

Local results are candidate evidence only. Formal Cloudflare build, deployment, DNS, real-browser responsive/accessibility and production network checks still require independent release acceptance.
