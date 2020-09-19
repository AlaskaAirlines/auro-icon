# auro-icon

auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.

## Properties

| Property         | Attribute        | Type      | Description                                      |
|------------------|------------------|-----------|--------------------------------------------------|
| `accent`         | `accent`         | `Boolean` | Sets the icon to use the accent style.           |
| `advisory`       | `advisory`       | `boolean` |                                                  |
| `category`       | `category`       | `String`  | The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage. |
| `disabled`       | `disabled`       | `Boolean` | Sets the icon to use the disabled style.         |
| `emphasis`       | `emphasis`       | `Boolean` | Sets the icon to use the emphasis style.         |
| `error`          | `error`          | `boolean` |                                                  |
| `hidden`         | `hidden`         | `Boolean` | If present, the component will be hidden both visually and from screen readers |
| `hiddenAudible`  | `hiddenAudible`  | `Boolean` | If present, the component will be hidden from screen readers, but seen visually |
| `hiddenVisually` | `hiddenVisually` | `Boolean` | If present, the component will be hidden visually, but still read by screen readers |
| `name`           | `name`           | `String`  | The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage. |
| `onDark`         | `onDark`         | `Boolean` | Set value for on-dark version of auro-icon.      |
| `success`        | `success`        | `boolean` |                                                  |
| `svg`            | `svg`            |           | Internal property to store the svg.              |

## Methods

| Method        | Type                              | Description                                   |
|---------------|-----------------------------------|-----------------------------------------------|
| `hideAudible` | `(value: any): "true" \| "false"` | Function that determines state of aria-hidden |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Hidden from visibility, used for a11y if icon description is needed |
