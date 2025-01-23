# auro-icon

auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| `accent`         | `accent`         | `boolean` |         | Sets the icon to use the accent style.           |
| `ariaHidden`     | `ariaHidden`     | `string`  |         | Set aria-hidden value. Default is `true`. Option is `false`. |
| `category`       | `category`       | `string`  |         | The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage. |
| `customColor`    | `customColor`    | `boolean` |         | Allows custom color to be set.                   |
| `customSvg`      | `customSvg`      | `boolean` |         | When true, auro-icon will render a custom SVG inside the default slot. |
| `disabled`       | `disabled`       | `boolean` |         | Sets the icon to use the disabled style.         |
| `emphasis`       | `emphasis`       | `boolean` |         | Sets the icon to use the emphasis style.         |
| `error`          | `error`          | `boolean` |         | Sets the icon to use the error style.            |
| `hidden`         | `hidden`         | `Boolean` |         | If present, the component will be hidden both visually and from screen readers |
| `hiddenAudible`  | `hiddenAudible`  | `Boolean` |         | If present, the component will be hidden from screen readers, but seen visually |
| `hiddenVisually` | `hiddenVisually` | `Boolean` |         | If present, the component will be hidden visually, but still read by screen readers |
| `info`           | `info`           | `boolean` |         | Sets the icon to use the info style.             |
| `label`          | `label`          | `boolean` |         | Exposes content in slot as icon label.           |
| `name`           | `name`           | `string`  |         | The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage. |
| `onDark`         | `onDark`         | `Boolean` | false   | Set value for on-dark version of auro-icon       |
| `primary`        | `primary`        | `boolean` |         | DEPRECATED: Sets the icon to use the baseline primary icon style. |
| `secondary`      | `secondary`      | `boolean` |         | Sets the icon to use the secondary style.        |
| `subtle`         | `subtle`         | `boolean` |         | Sets the icon to use the subtle style.           |
| `success`        | `success`        | `boolean` |         | Sets the icon to use the success style.          |
| `tertiary`       | `tertiary`       | `boolean` |         | Sets the icon to use the tertiary style.         |
| `warning`        | `warning`        | `boolean` |         | Sets the icon to use the warning style.          |

## Slots

| Name  | Description                                      |
|-------|--------------------------------------------------|
|       | Hidden from visibility, used for a11y if icon description is needed. |
| `svg` | Used for custom SVG content.                     |
