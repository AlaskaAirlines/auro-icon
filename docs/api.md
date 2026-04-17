# auro-alaska

The `auro-alaska` element provides users a way to use the Alaska Airline logos.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type    | Default   | Description                                                          |
| ---------- | ---------- | --------- | ------- | --------- | -------------------------------------------------------------------- |
| appearance | appearance |           | string  | `default` | Defines whether the button will be on lighter or darker backgrounds. |
| official   | official   |           | boolean |           | Set value for alaska airlines logo with official tagline.            |
| onDark     | onDark     |           | boolean |           | DEPRECATED - use `appearance="inverse"` instead.                     |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| (default) | Hidden from visibility, used for a11y if icon description is needed |

# auro-icon

The `auro-icon` element provides users a way to use the Alaska Airlines icon library.

### Properties & Attributes

| Properties  | Attributes  | Modifiers | Type                                                                                                                                                                                                                                                                                                                                                                                                 | Default   | Description                                                                                                            |
| ----------- | ----------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| appearance  | appearance  |           | string                                                                                                                                                                                                                                                                                                                                                                                               | `default` | Defines whether the button will be on lighter or darker backgrounds.                                                   |
| ariaHidden  | ariaHidden  |           | `true` \| `false`                                                                                                                                                                                                                                                                                                                                                                                    | `true`    | Set aria-hidden value. Default is `true`. Option is `false`.                                                           |
| category    | category    |           | string                                                                                                                                                                                                                                                                                                                                                                                               |           | The category of the icon you are looking for. See https://auro.alaskaair.com/icons/ways-to-use.                        |
| customColor | customColor |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Allows custom color to be set.                                                                                         |
| customSvg   | customSvg   |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | When true, auro-icon will render a custom SVG inside the default slot.                                                 |
| label       | label       |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Exposes content in slot as icon label.                                                                                 |
| name        | name        |           | string                                                                                                                                                                                                                                                                                                                                                                                               |           | The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/ways-to-use. |
| onDark      | onDark      |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | DEPRECATED - use `appearance="inverse"` instead.                                                                       |
| variant     | variant     |           | `accent1` \| `disabled` \| `muted` \| `statusDefault` \| `statusInfo` \| `statusSuccess` \| `statusWarning` \| `statusError` \| `statusInfoSubtle` \| `statusSuccessSubtle` \| `statusWarningSubtle` \| `statusErrorSubtle` \| `fareBasicEconomy` \| `fareBusiness` \| `fareEconomy` \| `fareFirst` \| `farePremiumEconomy` \| `tierOneWorldEmerald` \| `tierOneWorldSapphire` \| `tierOneWorldRuby` |           | The style of the icon.                                                                                                 |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| (default) | Hidden from visibility, used for a11y if icon description is needed. |
| svg       | Used for custom SVG content.                                         |

### CSS Shadow Parts

| Name  | Description                                       |
| ----- | ------------------------------------------------- |
| label | Used for customizing the style of the icon label. |