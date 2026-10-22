# auro-alaska

Shows the Alaska Airlines logo, with or without the official tagline.

**Key capabilities**
- **Fills its container**: the logo stretches to the width of its container, and the
  artwork best suited to that width is picked when the element first renders.
- **Official tagline**: `official` switches to the logo with the tagline.
- **Light & dark backgrounds**: `appearance="inverse"` shows the logo in white for dark
  backgrounds.

**Example**
```html
<auro-alaska>Alaska Airlines</auro-alaska>
```

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                   | Default   | Description                                                                                                                 |
| ---------- | ---------- | --------- | ---------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| appearance | appearance |           | "default" \| "inverse" | `default` | Matches the component's colors to the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones. |
| official   | official   |           | boolean                | `false`   | Shows the Alaska Airlines logo with the official tagline.                                                                   |
| onDark     | ondark     |           | boolean                | `false`   | Deprecated: Use `appearance="inverse"` instead.                                                                             |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                                 |
| -------- | ------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-alaska` on the same page. |

### Slots

| Name      | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| (default) | Text read by screen readers to describe the logo, such as "Alaska Airlines". It isn't shown on screen. |

### CSS Custom Properties

| Name                   | Description        |
| ---------------------- | ------------------ |
| --ds-auro-alaska-color | Color of the logo. |

# auro-icon

Shows an icon from the Auro icon library, or a custom SVG, sized and colored to match
Auro interfaces.

**Key capabilities**
- **Library icons**: set `category` and `name` to load any icon from the Auro icon
  library. If the icon isn't found, an error icon is shown instead.
- **Custom SVGs**: set `customSvg` and put your own `<svg>` in the `svg` slot.
- **Color**: `variant` colors the icon by meaning, such as `statusError` or `fareFirst`,
  and `customColor` makes it inherit the surrounding text color.
- **Light & dark backgrounds**: `appearance="inverse"` switches to colors designed for
  dark backgrounds.
- **Labels**: text in the default slot describes the icon to screen readers, and `label`
  also shows it next to the icon.

**Example**
```html
<auro-icon category="interface" name="pin-trip">Your trip starts here</auro-icon>
```

### Properties & Attributes

| Properties  | Attributes  | Modifiers | Type                                                                                                                                                                                                                                                                                                                                                                                                 | Default   | Description                                                                                                                                                                                                                                                                                                                               |
| ----------- | ----------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance  | appearance  |           | "default" \| "inverse"                                                                                                                                                                                                                                                                                                                                                                               | `default` | Matches the component's colors to the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones.                                                                                                                                                                                                               |
| ariaHidden  | ariahidden  |           | "true" \| "false"                                                                                                                                                                                                                                                                                                                                                                                    |           | Controls whether screen readers skip the icon's graphic. When unset, the graphic is hidden from screen readers, so describe meaningful icons with the default slot. Set to `"false"` to expose the graphic, so screen readers announce the icon's built-in description. This is the `ariahidden` attribute, not the native `aria-hidden`. |
| category    | category    |           | string                                                                                                                                                                                                                                                                                                                                                                                               |           | The icon's category in the Auro icon library, such as `interface` or `in-flight`. Use it with `name`. See https://auro.alaskaair.com/icons/ways-to-use.                                                                                                                                                                                   |
| customColor | customcolor |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Makes the icon inherit the color of the surrounding text, in place of the `variant` color or `--ds-auro-icon-color`.                                                                                                                                                                                                                      |
| customSvg   | customsvg   |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Shows the `<svg>` in the `svg` slot instead of loading an icon from the library. `category` and `name` are ignored.                                                                                                                                                                                                                       |
| label       | label       |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Shows the default slot's text next to the icon. Without it, the text is hidden on screen and read only by screen readers.                                                                                                                                                                                                                 |
| name        | name        |           | string                                                                                                                                                                                                                                                                                                                                                                                               |           | The icon's file name in the Auro icon library, without the extension, such as `pin-trip`. Use it with `category`. If the icon isn't found, an error icon is shown instead, or the default tail logo for names that start with `tail-`. See https://auro.alaskaair.com/icons/ways-to-use.                                                  |
| variant     | variant     |           | "accent1" \| "disabled" \| "muted" \| "statusDefault" \| "statusInfo" \| "statusSuccess" \| "statusWarning" \| "statusError" \| "statusInfoSubtle" \| "statusSuccessSubtle" \| "statusWarningSubtle" \| "statusErrorSubtle" \| "fareBasicEconomy" \| "fareBusiness" \| "fareEconomy" \| "fareFirst" \| "farePremiumEconomy" \| "tierOneWorldEmerald" \| "tierOneWorldSapphire" \| "tierOneWorldRuby" |           | Colors the icon to match its meaning: an emphasis or state (`accent1`, `disabled`, `muted`), a status (`status*`), a fare class (`fare*`), or a oneworld tier (`tierOneWorld*`). With `appearance="inverse"`, only `disabled`, `muted`, and `statusError` change the color.                                                               |
| onDark      | ondark      |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              | `false`   | Deprecated: Use `appearance="inverse"` instead.                                                                                                                                                                                                                                                                                           |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                               |
| -------- | ------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-icon` on the same page. |

### Slots

| Name      | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| (default) | Text that describes the icon. Screen readers read it; it's shown on screen only when `label` is set. |
| svg       | The custom `<svg>` to show in place of a library icon.                                               |

### CSS Shadow Parts

| Name  | Description                                   |
| ----- | --------------------------------------------- |
| label | The element wrapping the default slot's text. |
| svg   | The element wrapping the icon's SVG.          |

### CSS Custom Properties

| Name                 | Description                                           |
| -------------------- | ----------------------------------------------------- |
| --ds-auro-icon-color | Color of the icon. Ignored when `customColor` is set. |
| --ds-auro-icon-size  | Width and height of the icon.                         |