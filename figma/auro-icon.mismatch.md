<!-- build-mismatch:begin summary -->
# auro-icon — what is not addressed (no Figma component yet)

Sources: CEM from `origin/main` (auro-icon.cem-map.json). There is no Figma component for auro-icon yet, so nothing can be bound and no `auro-icon.figma.ts` is generated. This report lists every code attribute and slot that Figma will need to cover. Scope: attributes and slots only.

Code attributes with no Figma counterpart: **9 of 9** (0 more excluded as deprecated or private).
<!-- build-mismatch:end summary -->

<!-- build-mismatch:begin addressed -->
# PART 1 — Matched

0 of 9 bindable attributes (9 in the CEM; 0 deprecated or private excluded) and 0 of 2 slots match a Figma property by name. An attribute can appear more than once if more than one Figma property matches it.

### Attributes

_none_

### Slots

_none_

### Figma blocks (name matches only)

- none: no Figma component, so no `figma.connect` block is emitted


<!-- build-mismatch:end addressed -->

<!-- build-mismatch:begin not-addressed -->
# PART 2 — NOT addressed

Everything below is missing in Figma: there is no Figma component for this element yet.

## Code attributes with no Figma counterpart

| attribute | kind / values | default | flags |
|---|---|---|---|
| `appearance` | string | default | inherited from BaseIcon |
| `ariaHidden` | `true`, `false` | true |  |
| `category` | string |  |  |
| `customColor` | boolean |  |  |
| `customSvg` | boolean |  |  |
| `label` | boolean |  |  |
| `name` | string |  |  |
| `onDark` | boolean |  | inherited from BaseIcon |
| `variant` | `accent1`, `disabled`, `muted`, `statusDefault`, `statusInfo`, `statusSuccess`, `statusWarning`, `statusError`, `statusInfoSubtle`, `statusSuccessSubtle`, `statusWarningSubtle`, `statusErrorSubtle`, `fareBasicEconomy`, `fareBusiness`, `fareEconomy`, `fareFirst`, `farePremiumEconomy`, `tierOneWorldEmerald`, `tierOneWorldSapphire`, `tierOneWorldRuby` |  |  |

## Code attributes excluded by rule (deprecated or private)

_none_

## Code slots with no Figma counterpart

- `(default)`
- `svg`

## Code enum values with no Figma counterpart (on paired properties)

_none_

## Figma properties with no code counterpart

_none_

## Figma variant options with no code counterpart (all variant properties)

_none_
<!-- build-mismatch:end not-addressed -->

<!-- build-icons:begin unmapped -->
# Figma icons with no icon of the same name in @alaskaairux/icons

The Figma component `<category>/<name>` has no `<category>/<name>.svg` in the icons package (the category is what is before the first `/`, the name what is after the last one; `hazmat` names get the `hazmat-` prefix), so `category` and `name` would be a guess. 24 of 271 components. Each has a row in `auro-icon.translate.md` (an icon of the package, `n/a` or `TBD`); build-icons adds the missing ones.

| Figma component | Node |
|---|---|
| `club49` | 3717:1342 |
| `destination/car-rental-filled` | 7994:1409 |
| `destination/cruise-filled` | 9142:78 |
| `easybiz/contract-fare` | 616:26 |
| `easybiz/contract-mixed-fare` | 616:27 |
| `easybiz/flight-pass` | 2256:63 |
| `easybiz/government-fare` | 616:24 |
| `easybiz/government-mixed-fare` | 616:25 |
| `in-flight/carry-on` | 2:252 |
| `in-flight/child-stroke` | 11080:406 |
| `in-flight/paw-filled` | 12012:15 |
| `in-flight/paw-stroke` | 12012:22 |
| `in-flight/seat-lie-flat` | 12084:18 |
| `in-flight/seat-standard-legroom` | 12084:12 |
| `in-flight/seat-suite` | 12084:20 |
| `interface/locked-filled` | 3231:2881 |
| `interface/locked-stroke` | 3231:2882 |
| `interface/sell/recommended-for-standby-travel-but-watch` | 616:21 |
| `interface/unlocked-filled` | 3264:1705 |
| `interface/unlocked-stroke` | 3264:1704 |
| `payment/wallet-stroke` | 10787:20 |
| `programs/huaka'i` | 10068:338 |
| `shop/certificate-stroke` | 10787:11 |
| `utility/placeholder` | 10299:88 |
<!-- build-icons:end unmapped -->
