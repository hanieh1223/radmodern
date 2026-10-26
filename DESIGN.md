# RadModern Design Context

## Product and audience
RadModern is a Persian-first software studio serving businesses that need websites, custom software, practical AI, and digital optimization. The primary job of the marketing site is to help a prospective client understand the studio's services and start a project conversation.

## Visual direction
- Brand character: precise, thoughtful, technically capable, and approachable without inflated claims.
- Layout: Persian RTL, editorial spacing, strong typographic hierarchy, clear section rhythm, and restrained geometric technology motifs.
- Signature: deep indigo technical canvas with a small, controlled orange signal; abstract diagrams should communicate systems thinking rather than stock-tech imagery.
- Avoid generic SaaS gradients, invented client logos, fake metrics, and unverified testimonials.

## Tokens
The canonical runtime tokens live in `src/app/globals.css`.
- Background: `--bg: #fff`
- Ink: `--ink: #17133d`
- Brand navy: `--navy: #100653`
- Brand purple: `--purple: #2c1a92`
- Accent orange: `--orange: #ff791f`
- Muted text: `--muted: #74718b`
- Surface: `--surface: #f6f5fb`
- Divider: `--line: #e8e6f1`

Use these tokens rather than introducing local one-off colors. Body type uses Vazirmatn with system fallbacks.

## Content and interaction contract
- Use clear Persian labels and describe outcomes in business terms.
- Every CTA must navigate to a real route or a real section. Do not ship dead buttons.
- Navigation links use native anchors/Next links; focus states must be visible.
- Preserve RTL semantics and a keyboard-accessible skip link.
- Responsive layouts must not hide essential navigation or create horizontal overflow.
- Respect `prefers-reduced-motion`; motion is enhancement, never a prerequisite.
- Do not imply that a contact form has sent a message unless a real backend confirms it.
- Service and process copy should stay specific and avoid promises unsupported by evidence.

## Verification expectations
For UI changes, inspect desktop and narrow mobile layouts, verify navigation destinations, check keyboard focus and reduced-motion behavior, then run lint and production build when the environment is available.
