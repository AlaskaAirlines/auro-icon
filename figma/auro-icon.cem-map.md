# auro-icon — code-side map (from CEM)

Scope: attributes and slots only.

## Attributes

| attribute | kind | values | default | flags |
|---|---|---|---|---|
| `appearance` | string |  | default | inherited from BaseIcon |
| `ariaHidden` | enum | `true`, `false` | true |  |
| `category` | string |  |  |  |
| `customColor` | boolean |  |  |  |
| `customSvg` | boolean |  |  |  |
| `label` | boolean |  |  |  |
| `name` | string |  |  |  |
| `onDark` | boolean |  |  | inherited from BaseIcon |
| `variant` | enum | `accent1`, `disabled`, `muted`, `statusDefault`, `statusInfo`, `statusSuccess`, `statusWarning`, `statusError`, `statusInfoSubtle`, `statusSuccessSubtle`, `statusWarningSubtle`, `statusErrorSubtle`, `fareBasicEconomy`, `fareBusiness`, `fareEconomy`, `fareFirst`, `farePremiumEconomy`, `tierOneWorldEmerald`, `tierOneWorldSapphire`, `tierOneWorldRuby` |  |  |

## Slots

| slot | description |
|---|---|
| `(default)` | Hidden from visibility, used for a11y if icon description is needed. |
| `svg` | Used for custom SVG content. |
