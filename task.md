# Shadows of Camelot — Frontend Implementation Tasks

## Goal

Build a polished Thai-first, mobile-first PWA client for a real 5–10 player LAN social deduction game. Every screen must consume authoritative backend state and support a complete game from room creation through final role reveal and replay.

## Technical Foundation

- [x] Initialize Next.js + React + strict TypeScript.
- [x] Configure Motion, Zustand, Socket.IO Client, Lucide icons, and an offline-safe CSS design system.
- [x] Create typed API and Socket.IO clients.
- [x] Add Thai as the default document locale.
- [x] Add PWA metadata, local assets, safe-area support, and reduced-motion support.
- [x] Configure environment variables for LAN backend discovery.

## Visual System and Assets

- [x] Build a dark medieval fantasy token system using the specified navy, castle blue, slate, royal gold, mystic blue, emerald, crimson, and blood-red palette.
- [x] Create reusable ornamental panels, role cards, player cards, fantasy buttons, badges, status indicators, and progress markers.
- [ ] Bundle original/licensed local artwork for the cover, all nine role types, quest success/failure, both victory states, and assassination.
- [x] Bundle an original locally generated mobile cover image.
- [x] Optimize the cover artwork for mobile delivery.
- [x] Add subtle particles, magical glows, card reveal, result, crown, and victory motion foundations.
- [ ] Add sound toggle, optional haptics, and animation-reduction settings; gameplay must never require audio.

## Core Application and Connectivity

- [x] Add a host-only Test Mode toggle, Bot labels, and an in-game test-advance control.
- [x] Implement persistent player rejoin-token storage without persisting secret role data.
- [x] Implement connected/disconnected and actionable error states.
- [x] Request an authoritative sync after reconnect and restore the correct screen/action state.
- [x] Prevent duplicate submissions through server state and show pending/confirmed feedback.
- [x] Hide secret information when the document loses visibility or focus.
- [x] Implement lobby leave, host removal, host transfer, and real-time presence refresh.

## Screens and Game Flow

- [ ] Home: cinematic cover, title, create/join actions, and connection status.
- [ ] Create Room: nickname validation and room creation.
- [ ] Join Room: room-code normalization, nickname validation, and actionable errors.
- [ ] Lobby: room code, copy/share, LAN QR, player list, online/ready/host states, 5–10 player validation, and start action.
- [ ] Host Settings: optional roles, timer presets, individual phase timers, timeout-policy disclosure, player removal, and validation.
- [ ] Secret Role: press-and-hold reveal, portrait, faction, ability, permitted knowledge only, focus protection, and acknowledgement.
- [ ] Opening Discussion: objective, quest progress, leader, player list, and synchronized countdown.
- [ ] Team Selection: leader-only player selection, exact required size, confirmation, timeout-generated proposal labeling, and waiting state.
- [ ] Team Discussion: proposed team, objective, synchronized timer, and next-step explanation.
- [ ] Approval Voting: large Approve/Reject actions, deadline, anonymous submitted count, immutable submission, and waiting state.
- [ ] Vote Result: outcome, counts, individual closed votes, timeout labels, rejection count, and concise cinematic transition.
- [ ] Quest Execution: faction-safe options for selected players, confirmation, secret submission, and spectator progress.
- [ ] Quest Result: aggregate success/fail counts, updated score, and distinct success/failure animation.
- [ ] Round Discussion: previous outcome, score, next leader, objective, and countdown.
- [ ] Assassination Discussion: three-success context and protected Merlin identity.
- [ ] Assassin Decision: assassin-only target selection, confirmation, timeout policy, and spectator state.
- [ ] Game Over: distinct Good/Evil cinematics, all roles, quest history, voting history, duration, replay, and new-game actions.
- [x] Implement the functional play-again action that retains human players and returns them to the lobby.

## Shared Phase UX

- [ ] Display phase name, objective, current actor, required action, waiting/submitted state, and what happens next.
- [ ] Build an accessible synchronized countdown with a circular progress ring.
- [ ] Use gold normally, orange under 30 seconds, and crimson with a subtle pulse under 10 seconds.
- [x] Derive display time from server clock offset and authoritative deadlines; never reset it locally.
- [x] Display paused, disabled, and expired states.
- [ ] Add authorized host controls for pause, resume, +30 seconds, and +60 seconds.

## Mobile and Accessibility Quality

- [x] Optimize first for 390 × 844 and verify that primary screens fit without horizontal overflow.
- [x] Guarantee 44 px minimum touch targets, readable Thai text, and strong contrast.
- [ ] Use sticky primary actions where helpful and avoid unnecessary modals.
- [ ] Add semantic controls, visible focus, accessible labels, keyboard operation, and screen-reader status updates.
- [ ] Respect safe areas, reduced motion, muted audio, and browser autoplay rules.
- [ ] Provide loading, empty, disabled, pending, success, error, reconnecting, and recovered states.

## Testing and QA

- [ ] Unit-test stores, selectors, timer calculations, payload adapters, validation, and localization.
- [ ] Component-test all private actions and public waiting/result states.
- [ ] Test refresh/reconnect and already-submitted actions.
- [ ] Test secret role visibility and document-focus protection.
- [ ] Test the complete UI flow against the real backend for 5–10 players.
- [ ] Run responsive browser checks at 360, 375, 390, and 430 px.
- [ ] Review Thai typography, spacing, hierarchy, contrast, touch affordance, phase clarity, and animation performance.
- [x] Verify production build and locally bundled PWA assets without runtime Internet dependencies.

## Delivery

- [ ] Provide `.env.example`, development/build/test scripts, and Dockerfile.
- [ ] Document LAN URL configuration, device joining, QR behavior, browser requirements, and troubleshooting.
- [ ] Include a UX/QA review summary and known limitations, if any.

## Definition of Done

- A new player always understands the current phase, remaining time, required action, waiting state, and next step.
- Every requested screen is functional and driven by real backend state.
- Private information is never shown to the wrong player or retained visibly after focus loss.
- The experience works at all target mobile widths and remains usable on tablet/desktop.
- Automated tests and production builds pass with all required assets available locally.
