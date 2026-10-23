# auro-alaska

Shows the Alaska Airlines logo, with or without the official tagline.

**Key capabilities**
- **Fills its container**: the logo stretches to the width of its container, and the
  element picks the artwork that best suits that width when it first renders.
- **Official tagline**: `official` switches to the logo with the tagline.
- **Light and dark backgrounds**: `appearance="inverse"` shows the logo in white for dark
  backgrounds.

**Example**
```html
<auro-alaska></auro-alaska>
```

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                   | Default   | Description                                                                                                                              |
| ---------- | ---------- | --------- | ---------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| appearance | appearance |           | "default" \| "inverse" | `default` | Sets the component's colors for the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones.                |
| official   | official   |           | boolean                |           | Shows the Alaska Airlines logo with the official tagline. Changing it after the logo first renders doesn't currently switch the artwork. |
| onDark     | ondark     |           | boolean                |           | Deprecated: Use `appearance="inverse"` instead.<br>Switches the component's default colors to versions designed for dark backgrounds.    |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                                 |
| -------- | ------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-alaska` on the same page. |

### Slots

| Name      | Description                                                                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Extra text read by screen readers along with the logo's built-in name, which already reads "Alaska Airlines Logo image for Alaska Airlines". Leave it empty unless the logo needs more context. It isn't shown on screen. |

### CSS Custom Properties

| Name                   | Description        |
| ---------------------- | ------------------ |
| --ds-auro-alaska-color | Color of the logo. |

# auro-icon

Shows an icon from the Auro icon library, or a custom SVG, sized and colored to match
Auro interfaces.

**Key capabilities**
- **Library icons**: set `category` and `name` to load any icon from the Auro icon
  library.
- **Custom SVGs**: set `customSvg` and put your own `<svg>` in the `svg` slot.
- **Color**: `variant` colors the icon by meaning, such as `statusError` or `fareFirst`,
  and `customColor` makes it inherit the surrounding text color.
- **Light and dark backgrounds**: `appearance="inverse"` switches the default, `disabled`,
  `muted`, and `statusError` colors to versions designed for dark backgrounds.
- **Labels**: text in the default slot describes the icon to screen readers, and `label`
  also shows it next to the icon.

**Example**
```html
<auro-icon category="interface" name="pin-trip">Your trip starts here</auro-icon>
```

### Properties & Attributes

| Properties  | Attributes  | Modifiers | Type                                                                                                                                                                                                                                                                                                                                                                                                 | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ----------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance  | appearance  |           | "default" \| "inverse"                                                                                                                                                                                                                                                                                                                                                                               | `default` | Sets the component's colors for the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones.                                                                                                                                                                                                                                                                           |
| ariaHidden  | ariahidden  |           | "true" \| "false"                                                                                                                                                                                                                                                                                                                                                                                    |           | Sets whether screen readers skip the icon's graphic. When unset or `true`, they skip it, so describe meaningful icons in the default slot; use `false` to have them announce the icon's built-in description. This is the `ariahidden` attribute, not the native `aria-hidden`. Changing it after the icon first renders doesn't currently restore a removed description.                           |
| category    | category    |           | string                                                                                                                                                                                                                                                                                                                                                                                               |           | Sets the icon's category in the Auro icon library, such as `interface` or `in-flight`. Use it with `name`; see https://auro.alaskaair.com/icons/ways-to-use. Changing it after the icon first renders doesn't currently load the new icon.                                                                                                                                                          |
| customColor | customcolor |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Makes the icon inherit the color of the surrounding text, in place of the `variant` color or `--ds-auro-icon-color`.                                                                                                                                                                                                                                                                                |
| customSvg   | customsvg   |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Shows the `<svg>` in the `svg` slot instead of loading an icon from the library. `category` and `name` are ignored. Turning it off after the icon first renders doesn't currently load a library icon.                                                                                                                                                                                              |
| label       | label       |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Shows the default slot's text next to the icon. Without it, the text is hidden on screen and read only by screen readers.                                                                                                                                                                                                                                                                           |
| name        | name        |           | string                                                                                                                                                                                                                                                                                                                                                                                               |           | Sets which icon to show, by its file name in the Auro icon library without the extension, such as `pin-trip`. Use it with `category`; see https://auro.alaskaair.com/icons/ways-to-use. If the icon isn't found, `auro-icon` shows an error icon instead, or the default tail logo for names that start with `tail-`. Changing it after the icon first renders doesn't currently load the new icon. |
| variant     | variant     |           | "accent1" \| "disabled" \| "muted" \| "statusDefault" \| "statusInfo" \| "statusSuccess" \| "statusWarning" \| "statusError" \| "statusInfoSubtle" \| "statusSuccessSubtle" \| "statusWarningSubtle" \| "statusErrorSubtle" \| "fareBasicEconomy" \| "fareBusiness" \| "fareEconomy" \| "fareFirst" \| "farePremiumEconomy" \| "tierOneWorldEmerald" \| "tierOneWorldSapphire" \| "tierOneWorldRuby" |           | Sets the icon's color to match its meaning: an emphasis or state (`accent1`, `disabled`, `muted`), a status (`status*`), a fare class (`fare*`), or a oneworld tier (`tierOneWorld*`). With `appearance="inverse"`, only `disabled`, `muted`, and `statusError` switch to colors designed for dark backgrounds; the other variants keep their standard colors.                                      |
| onDark      | ondark      |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Deprecated: Use `appearance="inverse"` instead.<br>Switches the component's default colors to versions designed for dark backgrounds.                                                                                                                                                                                                                                                               |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                               |
| -------- | ------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-icon` on the same page. |

### Slots

| Name      | Description                                                                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Text that describes the icon to screen readers, such as "Your trip starts here". Leave it empty for decorative icons, which screen readers skip. It's shown on screen only when `label` is set. |
| svg       | The custom `<svg>` to show in place of a library icon.                                                                                                                                          |

### CSS Shadow Parts

| Name  | Description                                                                                                                                                           |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label | The `<div>` wrapping the default slot's text, visually hidden unless `label` is set.                                                                                  |
| svg   | The `<span>` wrapping the icon's SVG. Library icons also set this part on their `<svg>`, so `::part(svg)` styles both; a custom SVG in the `svg` slot doesn't get it. |

### CSS Custom Properties

| Name                 | Description                                           |
| -------------------- | ----------------------------------------------------- |
| --ds-auro-icon-color | Color of the icon. Ignored when `customColor` is set. |
| --ds-auro-icon-size  | Width and height of the icon.                         |