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
| [ariaHidden](#ariaHidden)     | `ariaHidden`     | `String`  |                                                  | Set aria-hidden value. Default is `true`. Option is `false`. |
| [category](#category)       | `category`       | `String`  |                                                  | The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage. |
| [customColor](#customColor)    | `customColor`    | `Boolean` |                                                  | Removes primary selector.                        |
| [customSvg](#customSvg)      | `customSvg`      | `Boolean` |                                                  | When true, auro-icon will render a custom SVG inside the default slot. |
| [disabled](#disabled)       | `disabled`       | `Boolean` |                                                  | Sets the icon to use the disabled style.         |
| [emphasis](#emphasis)       | `emphasis`       | `Boolean` |                                                  | Sets the icon to use the emphasis style.         |
| [error](#error)          | `error`          | `Boolean` |                                                  | Sets the icon to use the error style.            |
| [hidden](#hidden)         | `hidden`         | `Boolean` |                                                  | If present, the component will be hidden both visually and from screen readers |
| [hiddenAudible](#hiddenAudible)  | `hiddenAudible`  | `Boolean` |                                                  | If present, the component will be hidden from screen readers, but seen visually |
| [hiddenVisually](#hiddenVisually) | `hiddenVisually` | `Boolean` |                                                  | If present, the component will be hidden visually, but still read by screen readers |
| [info](#info)           | `info`           | `Boolean` |                                                  | Sets the icon to use the info style.             |
| [label](#label)          | `label`          | `Boolean` |                                                  | Exposes content in slot as icon label.           |
| [name](#name)           | `name`           | `String`  |                                                  | The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage |
| [onDark](#onDark)         | `onDark`         | `Boolean` | false                                            | Set value for on-dark version of auro-icon       |
| [primary](#primary)        | `primary`        | `Boolean` |                                                  | DEPRECATED: Sets the icon to use the baseline primary icon style. |
| [secondary](#secondary)      | `secondary`      | `Boolean` |                                                  | Sets the icon to use the secondary style.        |
| [subtle](#subtle)         | `subtle`         | `Boolean` |                                                  | Sets the icon to use the subtle style.           |
| [success](#success)        | `success`        | `Boolean` |                                                  | Sets the icon to use the success style.          |
| [tertiary](#tertiary)       | `tertiary`       | `Boolean` |                                                  | Sets the icon to use the tertiary style.         |
| [uri](#uri)            | `uri`            | `String`  | "https://cdn.jsdelivr.net/npm/@alaskaairux/icons@latest/dist" | Set the uri for CDN used when fetching icons     |
| [warning](#warning)        | `warning`        | `Boolean` |                                                  | Sets the icon to use the warning style.          |

## Methods

| Method                | Type                                      | Description                                      |
|-----------------------|-------------------------------------------|--------------------------------------------------|
| [handleCustomTagName](#handleCustomTagName) | `(name: string, elem: HTMLElement): void` | If component is registered as a custom name,<br />this function will add an attribute to the element<br />with the default name. This is so that other parent<br />components can still this the element.<br /><br />**name**: The default tag name.<br />**elem**: The element to add the attribute to. |

## Slots

| Name  | Description                                      |
|-------|--------------------------------------------------|
|       | Hidden from visibility, used for a11y if icon description is needed. |
| [svg](#svg) | Used for custom SVG content.                     |
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

### Custom SVG icons

Using the `customSvg` attribute, the component may render any icon svg content required. The `auro-icon` component will continue to render with all the variant and theme styles applied.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customSvg.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/customSvg.html -->
  <auro-icon customSvg>
    <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
  </auro-icon>
  <auro-icon customSvg success>
    <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
  </auro-icon>
  <auro-icon customSvg error>
    <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
  </auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customSvg.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customSvg.html -->

```html
<auro-icon customSvg>
  <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-icon>
<auro-icon customSvg success>
  <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-icon>
<auro-icon customSvg error>
  <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-icon>
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
  <auro-icon category="interface" name="pin-trip"></auro-icon> default<br />
  <auro-icon category="interface" name="pin-trip" accent></auro-icon> accent<br />
  <auro-icon category="interface" name="pin-trip" disabled></auro-icon> disabled<br />
  <auro-icon category="interface" name="pin-trip" emphasis></auro-icon> emphasis<br />
  <auro-icon category="interface" name="pin-trip" error></auro-icon> error<br />
  <auro-icon category="interface" name="pin-trip" info></auro-icon> info<br />
  <auro-icon category="interface" name="pin-trip" secondary></auro-icon> secondary<br />
  <auro-icon category="interface" name="pin-trip" subtle></auro-icon> subtle<br />
  <auro-icon category="interface" name="pin-trip" success></auro-icon> success<br />
  <auro-icon category="interface" name="pin-trip" tertiary></auro-icon>tertiary<br />
  <auro-icon category="interface" name="pin-trip" warning></auro-icon> warning
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/visualState.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/visualState.html -->

```html
<auro-icon category="interface" name="pin-trip"></auro-icon> default<br />
<auro-icon category="interface" name="pin-trip" accent></auro-icon> accent<br />
<auro-icon category="interface" name="pin-trip" disabled></auro-icon> disabled<br />
<auro-icon category="interface" name="pin-trip" emphasis></auro-icon> emphasis<br />
<auro-icon category="interface" name="pin-trip" error></auro-icon> error<br />
<auro-icon category="interface" name="pin-trip" info></auro-icon> info<br />
<auro-icon category="interface" name="pin-trip" secondary></auro-icon> secondary<br />
<auro-icon category="interface" name="pin-trip" subtle></auro-icon> subtle<br />
<auro-icon category="interface" name="pin-trip" success></auro-icon> success<br />
<auro-icon category="interface" name="pin-trip" tertiary></auro-icon>tertiary<br />
<auro-icon category="interface" name="pin-trip" warning></auro-icon> warning
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### onDark visual state

All compatible with `onDark` attribute.

<div class="exampleWrapper" style="background: repeating-linear-gradient(45deg, var(--ds-color-background-darkest, #00274a), var(--ds-color-background-darkest, #00274a) 10px, var(--ds-color-background-darker, #01426a) 10px, var(--ds-color-background-darker, #01426a) 20px);">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/onDark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/onDark.html -->
  <span style="color: var(--ds-color-text-primary-inverse)">
    <auro-icon category="interface" name="pin-trip" onDark></auro-icon>default<br />
    <auro-icon category="interface" name="pin-trip" onDark accent></auro-icon>accent<br />
    <auro-icon category="interface" name="pin-trip" onDark disabled></auro-icon>disabled<br />
    <auro-icon category="interface" name="pin-trip" onDark emphasis></auro-icon>emphasis<br />
    <auro-icon category="interface" name="pin-trip" onDark error></auro-icon>error<br />
    <auro-icon category="interface" name="pin-trip" onDark info></auro-icon>info<br />
    <auro-icon category="interface" name="pin-trip" onDark secondary></auro-icon>secondary<br />
    <auro-icon category="interface" name="pin-trip" onDark subtle></auro-icon>subtle<br />
    <auro-icon category="interface" name="pin-trip" onDark success></auro-icon>success<br />
    <auro-icon category="interface" name="pin-trip" onDark tertiary></auro-icon>tertiary<br />
    <auro-icon category="interface" name="pin-trip" onDark warning></auro-icon>warning
  </span>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/onDark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/onDark.html -->

```html
<span style="color: var(--ds-color-text-primary-inverse)">
  <auro-icon category="interface" name="pin-trip" onDark></auro-icon>default<br />
  <auro-icon category="interface" name="pin-trip" onDark accent></auro-icon>accent<br />
  <auro-icon category="interface" name="pin-trip" onDark disabled></auro-icon>disabled<br />
  <auro-icon category="interface" name="pin-trip" onDark emphasis></auro-icon>emphasis<br />
  <auro-icon category="interface" name="pin-trip" onDark error></auro-icon>error<br />
  <auro-icon category="interface" name="pin-trip" onDark info></auro-icon>info<br />
  <auro-icon category="interface" name="pin-trip" onDark secondary></auro-icon>secondary<br />
  <auro-icon category="interface" name="pin-trip" onDark subtle></auro-icon>subtle<br />
  <auro-icon category="interface" name="pin-trip" onDark success></auro-icon>success<br />
  <auro-icon category="interface" name="pin-trip" onDark tertiary></auro-icon>tertiary<br />
  <auro-icon category="interface" name="pin-trip" onDark warning></auro-icon>warning
</span>
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

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../../src/tokens.scss -->

```scss
:host {
  --ds-auro-icon-color: var(--ds-color-icon-primary-default, $ds-color-icon-primary-default);
}
```
<!-- AURO-GENERATED-CONTENT:END -->
