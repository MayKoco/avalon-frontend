# Shadows of Camelot — Frontend

Thai-first mobile web client for the Shadows of Camelot LAN multiplayer game. Built with Next.js, React, Zustand, Socket.IO Client, Motion, and locally bundled visual assets.

## Local setup

Requirements: Node.js 22+ and pnpm 10+.

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Set `NEXT_PUBLIC_API_URL` to the backend's reachable URL. For phones on the same Wi-Fi this must use the server machine's LAN address, not `localhost`:

```env
NEXT_PUBLIC_API_URL=http://192.168.1.25:4000
```

Open `http://<LAN-IP>:3000` on each phone. The lobby QR uses the browser's current origin so it points other players to the same host.

For solo QA, the host can enable **Test Mode** in the lobby. The backend fills empty seats with labeled Bots and the host can move through phases with the test-advance control. This option appears only when the backend allows Test Mode.

## Verification

```bash
pnpm build
```

The interface has been designed for 390 × 844 first and supports 360–430 px mobile widths, safe areas, touch targets, reduced motion, reconnect, and focus-based secret hiding.

## Docker

```bash
NEXT_PUBLIC_API_URL=http://192.168.1.25:4000 docker compose up --build
```

`NEXT_PUBLIC_API_URL` is compiled into the Next.js client bundle during the Docker build.

## Artwork

The cover art in `public/art/camelot-cover.jpg` is original generated artwork bundled locally and optimized for mobile delivery. Runtime gameplay does not depend on external image URLs.

See [task.md](task.md) for the delivery checklist and remaining work.
