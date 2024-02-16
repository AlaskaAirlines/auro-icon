# auro-icon

auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.

## Attributes

| Attribute    | Type      | Description                 |
|--------------|-----------|-----------------------------|
| `customSize` | `Boolean` | Allows for custom size use. |

## Properties

| Property         | Attribute        | Type      | Default                                          | Description                                      |
|------------------|------------------|-----------|--------------------------------------------------|--------------------------------------------------|
| `accent`         | `accent`         | `Boolean` |                                                  | Sets the icon to use the accent style.           |
| `advisory`       | `advisory`       | `Boolean` |                                                  | Sets the icon to use the advisory style.         |
| `ariaHidden`     | `ariaHidden`     | `String`  |                                                  | Set aria-hidden value. Default is `true`. Option is `false`. |
| `category`       | `category`       | `String`  |                                                  | The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage. |
| `customColor`    | `customColor`    | `Boolean` |                                                  | Removes primary selector.                        |
| `disabled`       | `disabled`       | `Boolean` |                                                  | Sets the icon to use the disabled style.         |
| `emphasis`       | `emphasis`       | `Boolean` |                                                  | Sets the icon to use the emphasis style.         |
| `error`          | `error`          | `Boolean` |                                                  | Sets the icon to use the error style.            |
| `hidden`         | `hidden`         | `Boolean` |                                                  | If present, the component will be hidden both visually and from screen readers |
| `hiddenAudible`  | `hiddenAudible`  | `Boolean` |                                                  | If present, the component will be hidden from screen readers, but seen visually |
| `hiddenVisually` | `hiddenVisually` | `Boolean` |                                                  | If present, the component will be hidden visually, but still read by screen readers |
| `label`          | `label`          | `Boolean` |                                                  | Exposes content in slot as icon label.           |
| `name`           | `name`           | `String`  |                                                  | The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage |
| `onDark`         | `onDark`         | `Boolean` | false                                            | Set value for on-dark version of auro-icon       |
| `primary`        | `primary`        | `Boolean` |                                                  | Sets the icon to use the baseline primary icon style. |
| `success`        | `success`        | `Boolean` |                                                  | Sets the icon to use the success style.          |
| `uri`            | `uri`            | `String`  | "https://cdn.jsdelivr.net/npm/@alaskaairux/icons@latest/dist" | Set the uri for CDN used when fetching icons     |
| `warning`        | `warning`        | `Boolean` |                                                  | Sets the icon to use the warning style.          |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Hidden from visibility, used for a11y if icon description is needed. |
