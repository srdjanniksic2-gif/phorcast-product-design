# 05 Design system

The system lives in Figma and in code. In code it is one token file, [`design-system/tokens.css`](design-system/tokens.css), and every component reads roles from it, never hex values. That is what keeps three products (app, site, coming soon page) from drifting apart.

## Color roles

| Role | Dark | Used for |
|---|---|---|
| `--bg` Night | `#0F0E0D` | Page |
| `--card` | `#1C1C1C` | Surfaces |
| `--ink` | `#FFFBF8` | Text |
| `--muted` | `#9D9D9D` | Secondary text |
| `--accent` Phorcast red | `#E5331E` | Brand, selection, progress, calls to action |
| `--buy` | `#15A456` | Yes, Up, gain |
| `--sell` | `#D12F2F` | No, Down, loss |

**The buy and sell rule:** green and red mean buy and sell, gain and loss, and nothing else. The first team, Yes, Up and Over are buy. The last team, No, Down and Under are sell. Steppers, selections and calls to action stay Phorcast red.

**Light theme:** pure white and neutral greys. No cream, no glows, no shadows, no gradients on surfaces. Dark is the default.

## Type

Instrument Sans for every role.

| Style | Spec | Sample |
|---|---|---|
| Display | 56 · 500 · −2% | Cast Your Conviction |
| Heading | 40 · 500 | Trade on what happens next |
| Title | 22 · 500 | Will Bitcoin close higher today? |
| Body | 16 · 400 · 1.45 | Every share pays $1 if you are right. |
| Label | 14 · 500 | $1.92M Vol · Ends Dec 31, 2026 |
| Small | 12 · 500 | Terms and eligibility apply. |
| Eyebrow | 12 · 500 · caps +14% | LIVE NOW |

The app runs a denser UI scale on top of this (11 to 34px), defined in the token file.

## Shape and layout

- Radius scale: 4, 6, 10, 14, 18 and pill.
- Hairline borders at 8, 14 and 24% opacity instead of shadows.
- The ticket column is 340px on desktop. On phones the ticket becomes a bottom bar that opens a sheet, and the app gets a 64px bottom tab bar.
- Excluded everywhere: glassmorphism, glows, decorative gradients, particles, grain.

Next: [06 Design to code](06-design-to-code.md)
