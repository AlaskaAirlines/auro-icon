<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-icon

auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.

## Attributes

| Attribute    | Type      | Description                 |
|--------------|-----------|-----------------------------|
| [customSize](#customSize) | `Boolean` | Allows for custom size use. |

## Properties

| Property         | Attribute        | Type      | Default                                          | Description                                      |
|------------------|------------------|-----------|--------------------------------------------------|--------------------------------------------------|
| [accent](#accent)         | `accent`         | `Boolean` |                                                  | Sets the icon to use the accent style.           |
| [advisory](#advisory)       | `advisory`       | `Boolean` |                                                  | Sets the icon to use the advisory style.         |
| [ariaHidden](#ariaHidden)     | `ariaHidden`     | `String`  |                                                  | Set aria-hidden value. Default is `true`. Option is `false`. |
| [category](#category)       | `category`       | `String`  |                                                  | The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage. |
| [customColor](#customColor)    | `customColor`    | `Boolean` |                                                  | Removes primary selector.                        |
| [disabled](#disabled)       | `disabled`       | `Boolean` |                                                  | Sets the icon to use the disabled style.         |
| [emphasis](#emphasis)       | `emphasis`       | `Boolean` |                                                  | Sets the icon to use the emphasis style.         |
| [error](#error)          | `error`          | `Boolean` |                                                  | Sets the icon to use the error style.            |
| [hidden](#hidden)         | `hidden`         | `Boolean` |                                                  | If present, the component will be hidden both visually and from screen readers |
| [hiddenAudible](#hiddenAudible)  | `hiddenAudible`  | `Boolean` |                                                  | If present, the component will be hidden from screen readers, but seen visually |
| [hiddenVisually](#hiddenVisually) | `hiddenVisually` | `Boolean` |                                                  | If present, the component will be hidden visually, but still read by screen readers |
| [label](#label)          | `label`          | `Boolean` |                                                  | Exposes content in slot as icon label.           |
| [name](#name)           | `name`           | `String`  |                                                  | The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage |
| [onDark](#onDark)         | `onDark`         | `Boolean` | false                                            | Set value for on-dark version of auro-icon       |
| [primary](#primary)        | `primary`        | `Boolean` |                                                  | Sets the icon to use the baseline primary icon style. |
| [success](#success)        | `success`        | `Boolean` |                                                  | Sets the icon to use the success style.          |
| [uri](#uri)            | `uri`            | `String`  | "https://cdn.jsdelivr.net/npm/@alaskaairux/icons@latest/dist" | Set the uri for CDN used when fetching icons     |
| [warning](#warning)        | `warning`        | `Boolean` |                                                  | Sets the icon to use the warning style.          |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Hidden from visibility, used for a11y if icon description is needed. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-icon category="interface" name="pin-trip"></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-icon category="interface" name="pin-trip"></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Default component with label (accessibility recommendation)

While you may place the icon alone, it is considered best practice to combine the icon with a description statement. The `auro-icon` element easily supports this with the use of the `label` attribute. By using the `label` attribute, content you enter into the `slot` of the element will appear next to the icon of choice. Changing the `aria-hidden` state of the icon is NOT needed. The assistive technologies will bypass the icon and announce the label string of content.

In situations where the icon is to be listed with a descriptive label, simply use the `label` attribute and the text in the `slot` will appear next to the icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/accessRec.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/accessRec.html -->
  <auro-icon label category="in-flight" name="wifi">Your flight is enabled with super fast Wi-Fi</auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/accessRec.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/accessRec.html -->

```html
<auro-icon label category="in-flight" name="wifi">Your flight is enabled with super fast Wi-Fi</auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Icons illustrating visual state

Mono-color icons support the following attributes to illustrate visual state. The `primary` attribute is assigned by default. Other attributes, `emphasis`, `accent`, `disabled`, `error`, `success`, and `advisory` are supported.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/visualState.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/visualState.html -->
  <auro-icon category="interface" name="pin-trip"></auro-icon>
  <auro-icon category="interface" name="pin-trip" emphasis></auro-icon>
  <auro-icon category="interface" name="pin-trip" accent></auro-icon>
  <auro-icon category="interface" name="pin-trip" disabled></auro-icon>
  <auro-icon category="interface" name="pin-trip" error></auro-icon>
  <auro-icon category="interface" name="pin-trip" success></auro-icon>
  <auro-icon category="interface" name="pin-trip" advisory></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/visualState.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/visualState.html -->

```html
<auro-icon category="interface" name="pin-trip"></auro-icon>
<auro-icon category="interface" name="pin-trip" emphasis></auro-icon>
<auro-icon category="interface" name="pin-trip" accent></auro-icon>
<auro-icon category="interface" name="pin-trip" disabled></auro-icon>
<auro-icon category="interface" name="pin-trip" error></auro-icon>
<auro-icon category="interface" name="pin-trip" success></auro-icon>
<auro-icon category="interface" name="pin-trip" advisory></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### ondark visual state

All compatible with `ondark` attribute.

<div class="exampleWrapper" style="background: repeating-linear-gradient(45deg, var(--ds-color-background-darkest, #00274a), var(--ds-color-background-darkest, #00274a) 10px, var(--ds-color-background-darker, #01426a) 10px, var(--ds-color-background-darker, #01426a) 20px);">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/onDark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/onDark.html -->
  <auro-icon ondark category="interface" name="pin-trip"></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" emphasis></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" accent></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" disabled></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" error></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" success></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" advisory></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/onDark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/onDark.html -->

```html
<auro-icon ondark category="interface" name="pin-trip"></auro-icon>
<auro-icon ondark category="interface" name="pin-trip" emphasis></auro-icon>
<auro-icon ondark category="interface" name="pin-trip" accent></auro-icon>
<auro-icon ondark category="interface" name="pin-trip" disabled></auro-icon>
<auro-icon ondark category="interface" name="pin-trip" error></auro-icon>
<auro-icon ondark category="interface" name="pin-trip" success></auro-icon>
<auro-icon ondark category="interface" name="pin-trip" advisory></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom Color

The `auro-icon` by default apply the `primary` selector for color application. This can be over written using the defined API listed above. Custom colors are also allowed when using the `customColor` attribute and a parent element with a color setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customColor.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/customColor.html -->
  <auro-icon category="interface" name="pin-trip" ></auro-icon> default inherits color<br/>
  <auro-icon category="interface" name="pin-trip" customColor></auro-icon> applies primary color selector<br/>
  <auro-icon category="interface" name="pin-trip" customColor style="color: orange;"></auro-icon> applies the color from the style attribute
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customColor.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customColor.html -->

```html
<auro-icon category="interface" name="pin-trip" ></auro-icon> default inherits color<br/>
<auro-icon category="interface" name="pin-trip" customColor></auro-icon> applies primary color selector<br/>
<auro-icon category="interface" name="pin-trip" customColor style="color: orange;"></auro-icon> applies the color from the style attribute
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom Size

Auro icon's by default are set to the value of the `--ds-size-300` token. To customize the icon size, add the `customSize` attribute and adjust the `width` of the parent element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customSize.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/customSize.html -->
  <auro-icon style="width: 30rem" category="interface" name="pin-trip" success customSize></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customSize.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customSize.html -->

```html
<auro-icon style="width: 30rem" category="interface" name="pin-trip" success customSize></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
