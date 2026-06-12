<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router project. Here's a summary of all changes made:

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side using the recommended Next.js 15.3+ approach via the instrumentation file. Configured with a reverse proxy (`/ingest`), exception capture for error tracking, and debug mode in development.
- **`next.config.ts`**: Added reverse proxy rewrites to route PostHog ingestion requests through `/ingest`, routing to `us.i.posthog.com` and static assets to `us-assets.i.posthog.com`. Added `skipTrailingSlashRedirect: true`.
- **`.env.local`**: Created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`components/ExploreBtn.tsx`**: Added `posthog.capture("explore_events_clicked")` when the user clicks the Explore Events CTA button.
- **`components/EventCard.tsx`**: Added `posthog.capture("event_card_clicked", { event_title, event_slug, event_location, event_date })` when a user clicks an event card. Also converted to a client component (`'use client'`).
- **`components/Navbar.tsx`**: Added `posthog.capture("nav_link_clicked", { label, href })` on each navigation link click. Also converted to a client component.

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" CTA button — start of event discovery funnel | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks an event card to view details (properties: `event_title`, `event_slug`, `event_location`, `event_date`) | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicks a navigation link (properties: `label`, `href`) | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/467482/dashboard/1704778)
- [Explore Events Clicks (wizard)](https://us.posthog.com/project/467482/insights/j5MPuJ0z)
- [Event Card Clicks (wizard)](https://us.posthog.com/project/467482/insights/RrAHg7a5)
- [Navigation Link Clicks (wizard)](https://us.posthog.com/project/467482/insights/FJlkn5m5)
- [All User Actions Overview (wizard)](https://us.posthog.com/project/467482/insights/ehdDsk2O)
- [Most Clicked Events by Title (wizard)](https://us.posthog.com/project/467482/insights/IapogJFK)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
