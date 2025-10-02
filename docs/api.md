# auro-icon

auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.

## Properties

| Property         | Attribute        | Type      | Default     | Description                                      |
|------------------|------------------|-----------|-------------|--------------------------------------------------|
| `appearance`     | `appearance`     | `string`  | "'default'" | Defines whether the button will be on lighter or darker backgrounds. |
| `ariaHidden`     | `ariaHidden`     | `string`  |             | Set aria-hidden value. Default is `true`. Option is `false`. |
| `category`       | `category`       | `string`  |             | The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage. |
| `customColor`    | `customColor`    | `boolean` |             | Allows custom color to be set.                   |
| `customSvg`      | `customSvg`      | `boolean` |             | When true, auro-icon will render a custom SVG inside the default slot. |
| `hidden`         | `hidden`         | `Boolean` |             | If present, the component will be hidden both visually and from screen readers |
| `hiddenAudible`  | `hiddenAudible`  | `Boolean` |             | If present, the component will be hidden from screen readers, but seen visually |
| `hiddenVisually` | `hiddenVisually` | `Boolean` |             | If present, the component will be hidden visually, but still read by screen readers |
| `label`          | `label`          | `boolean` |             | Exposes content in slot as icon label.           |
| `name`           | `name`           | `string`  |             | The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage. |
| `onDark`         | `onDark`         | `boolean` | false       | DEPRECATED - use `appearance` instead.           |
| `variant`        | `variant`        | `string`  | "undefined" | The style of the icon. The accepted variants are `accent1`, `disabled`, `muted`, `statusDefault`, `statusInfo`, `statusSuccess`, `statusWarning`, `statusError`, `statusInfoSubtle`, `statusSuccessSubtle`, `statusWarningSubtle`, `statusErrorSubtle`, `fareBasicEconomy`, `fareBusiness`, `fareEconomy`, `fareFirst`, `farePremiumEconomy`, `tierOneWorldEmerald`, `tierOneWorldSapphire`, `tierOneWorldRuby`. |

## Slots

| Name  | Description                                      |
|-------|--------------------------------------------------|
|       | Hidden from visibility, used for a11y if icon description is needed. |
| `svg` | Used for custom SVG content.                     |

## CSS Shadow Parts

| Part    | Description                                      |
|---------|--------------------------------------------------|
| `label` | Used for customizing the style of the icon label. |
