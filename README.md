# ArtEffect Studio App

Standalone Sanity Studio for ArtEffect content management.

## Run locally

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Studio runs on `http://localhost:3339`.

## Deploy to Vercel

This studio is configured for `pnpm` and includes a local `vercel.json` that forces:

- `CI=1 pnpm install`
- `CI=1 NO_UPDATE_NOTIFIER=1 pnpm build`
- `dist` as the output directory
- Node.js `24.x`

Required Vercel environment variables:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_STUDIO_API_VERSION` for seed scripts
- `SANITY_STUDIO_API_TOKEN` if seed or authenticated API usage is needed at build time

## Environment

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Required:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_STUDIO_API_VERSION`
- `SANITY_STUDIO_API_TOKEN` (for seed)

## Seed demo content

```bash
pnpm seed
```

The seed inserts:

- 2 NGOs
- 2 Artists
- 2 Batches
- 4 Designs
- 16 Products

Image fields are intentionally optional and can be filled later.

## Schema coverage

- NGO
- Artist
- Batch
- Design
- Product
- Shared objects: `blockContent`, `impactStat`

Batch preview is identity-first: **cause + NGO + release**.

## Local verification checklist

1. Studio opens at `http://localhost:3339`.
2. Content pane shows NGO, Artist, Batch, Design, Product types.
3. Run `pnpm seed` and confirm demo docs appear.
4. Open a Batch document and confirm preview subtitle follows `cause + NGO + release`.
5. Run a production build:

```bash
pnpm build
```
