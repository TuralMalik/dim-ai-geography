# DİM AI Geography - Deploy Guide

This is the clean deploy-ready frontend for the MVP.

## Local Run

```powershell
cd C:\Users\tural\Documents\Codex\2026-06-03\gpt\outputs\dim_ai_deploy_ready
npm.cmd install
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

## Build Locally

```powershell
npm.cmd run build
```

If PowerShell blocks `npm.ps1`, always use `npm.cmd`.

## Deploy To Vercel

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Open https://vercel.com
4. Click `Add New Project`.
5. Import the GitHub repository.
6. Framework should be detected as `Next.js`.
7. Build command:

```text
npm run build
```

8. Output directory: leave empty/default.
9. Deploy.

Vercel will give you a public URL like:

```text
https://dim-ai-geography.vercel.app
```

## Environment Variables

For the current frontend-only demo, no backend URL is required.

Later, when the real backend is hosted, set:

```text
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

## Current Scope

- Frontend only
- Sample Geography data
- Modern EdTech UI
- Next.js + TailwindCSS

Backend deployment can be added later with a separate API host.
