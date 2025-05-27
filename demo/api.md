<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-icon

auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.

## Properties

| Property         | Attribute        | Type      | Default     | Description                                      |
|------------------|------------------|-----------|-------------|--------------------------------------------------|
| [ariaHidden](#ariaHidden)     | `ariaHidden`     | `string`  |             | Set aria-hidden value. Default is `true`. Option is `false`. |
| [category](#category)       | `category`       | `string`  |             | The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage. |
| [customColor](#customColor)    | `customColor`    | `boolean` |             | Allows custom color to be set.                   |
| [customSvg](#customSvg)      | `customSvg`      | `boolean` |             | When true, auro-icon will render a custom SVG inside the default slot. |
| [hidden](#hidden)         | `hidden`         | `Boolean` |             | If present, the component will be hidden both visually and from screen readers |
| [hiddenAudible](#hiddenAudible)  | `hiddenAudible`  | `Boolean` |             | If present, the component will be hidden from screen readers, but seen visually |
| [hiddenVisually](#hiddenVisually) | `hiddenVisually` | `Boolean` |             | If present, the component will be hidden visually, but still read by screen readers |
| [label](#label)          | `label`          | `boolean` |             | Exposes content in slot as icon label.           |
| [name](#name)           | `name`           | `string`  |             | The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage. |
| [onDark](#onDark)         | `onDark`         | `boolean` | false       | Set value for on-dark version of auro-icon.      |
| [variant](#variant)        | `variant`        | `string`  | "undefined" | The style of the icon. The accepted variants are `accent1`, `disabled`, `muted`, `statusDefault`, `statusInfo`, `statusSuccess`, `statusWarning`, `statusError`, `statusInfoSubtle`, `statusSuccessSubtle`, `statusWarningSubtle`, `statusErrorSubtle`, `fareBasicEconomy`, `fareBusiness`, `fareEconomy`, `fareFirst`, `farePremiumEconomy`, `tierOneWorldEmerald`, `tierOneWorldSapphire`, `tierOneWorldRuby`. |

## Slots

| Name  | Description                                      |
|-------|--------------------------------------------------|
|       | Hidden from visibility, used for a11y if icon description is needed. |
| [svg](#svg) | Used for custom SVG content.                     |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
  <auro-icon category="interface" name="pin-trip"></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

```html
<auro-icon category="interface" name="pin-trip"></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom SVG icons

Using the `customSvg` attribute, the component may render any icon svg content required. The `auro-icon` component will continue to render with all the variant and theme styles applied.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/customSvg.html) -->
  <!-- The below content is automatically added from ../apiExamples/customSvg.html -->
  <auro-icon customSvg>
    <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
  </auro-icon>
  <auro-icon customSvg variant="statusSuccess">
    <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
  </auro-icon>
  <auro-icon customSvg variant="statusError">
    <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
  </auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/customSvg.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/customSvg.html -->

```html
<auro-icon customSvg>
  <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-icon>
<auro-icon customSvg variant="statusSuccess">
  <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-icon>
<auro-icon customSvg variant="statusError">
  <svg slot="svg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" part="svg" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Default component with label (accessibility recommendation)

While you may place the icon alone, it is considered best practice to combine the icon with a description statement. The `auro-icon` element easily supports this with the use of the `label` attribute. By using the `label` attribute, content you enter into the `slot` of the element will appear next to the icon of choice. Changing the `aria-hidden` state of the icon is NOT needed. The assistive technologies will bypass the icon and announce the label string of content.

In situations where the icon is to be listed with a descriptive label, simply use the `label` attribute and the text in the `slot` will appear next to the icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/accessRec.html) -->
  <!-- The below content is automatically added from ../apiExamples/accessRec.html -->
  <auro-icon label category="in-flight" name="wifi">Your flight is enabled with super fast Wi-Fi</auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/accessRec.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/accessRec.html -->

```html
<auro-icon label category="in-flight" name="wifi">Your flight is enabled with super fast Wi-Fi</auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Icons illustrating visual state

Mono-color icons support the following attributes to illustrate visual state.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/visualState.html) -->
  <!-- The below content is automatically added from ../apiExamples/visualState.html -->
  <auro-icon category="interface" name="pin-trip"></auro-icon> default<br />
  <auro-icon category="interface" name="pin-trip" variant="disabled"></auro-icon> disabled<br />
  <auro-icon category="interface" name="pin-trip" variant="muted"></auro-icon> muted<br />
  <auro-icon category="interface" name="pin-trip" variant="accent1"></auro-icon> accent1<br />
  <auro-icon category="interface" name="pin-trip" variant="statusDefault"></auro-icon> status default<br />
  <auro-icon category="interface" name="pin-trip" variant="statusInfo"></auro-icon> status info<br />
  <auro-icon category="interface" name="pin-trip" variant="statusSuccess"></auro-icon> status success<br />
  <auro-icon category="interface" name="pin-trip" variant="statusWarning"></auro-icon> status warning<br />
  <auro-icon category="interface" name="pin-trip" variant="statusError"></auro-icon> status error<br />
  <auro-icon category="interface" name="pin-trip" variant="statusInfoSubtle"></auro-icon> status info subtle<br />
  <auro-icon category="interface" name="pin-trip" variant="statusSuccessSubtle"></auro-icon> status success subtle<br />
  <auro-icon category="interface" name="pin-trip" variant="statusWarningSubtle"></auro-icon> status warning subtle<br />
  <auro-icon category="interface" name="pin-trip" variant="statusErrorSubtle"></auro-icon> status error subtle<br />
  <auro-icon category="interface" name="pin-trip" variant="fareBasicEconomy"></auro-icon> fare basic economy<br />
  <auro-icon category="interface" name="pin-trip" variant="fareBusiness"></auro-icon> fare business<br />
  <auro-icon category="interface" name="pin-trip" variant="fareEconomy"></auro-icon> fare economy<br />
  <auro-icon category="interface" name="pin-trip" variant="fareFirst"></auro-icon> fare first<br />
  <auro-icon category="interface" name="pin-trip" variant="farePremiumEconomy"></auro-icon> fare premium economy<br />
  <auro-icon category="interface" name="pin-trip" variant="tierOneWorldEmerald"></auro-icon> fare oneworld emerald<br />
  <auro-icon category="interface" name="pin-trip" variant="tierOneWorldSapphire"></auro-icon> fare oneworld sapphire<br />
  <auro-icon category="interface" name="pin-trip" variant="tierOneWorldRuby"></auro-icon> fare oneworld ruby<br />
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/visualState.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/visualState.html -->

```html
<auro-icon category="interface" name="pin-trip"></auro-icon> default<br />
<auro-icon category="interface" name="pin-trip" variant="disabled"></auro-icon> disabled<br />
<auro-icon category="interface" name="pin-trip" variant="muted"></auro-icon> muted<br />
<auro-icon category="interface" name="pin-trip" variant="accent1"></auro-icon> accent1<br />
<auro-icon category="interface" name="pin-trip" variant="statusDefault"></auro-icon> status default<br />
<auro-icon category="interface" name="pin-trip" variant="statusInfo"></auro-icon> status info<br />
<auro-icon category="interface" name="pin-trip" variant="statusSuccess"></auro-icon> status success<br />
<auro-icon category="interface" name="pin-trip" variant="statusWarning"></auro-icon> status warning<br />
<auro-icon category="interface" name="pin-trip" variant="statusError"></auro-icon> status error<br />
<auro-icon category="interface" name="pin-trip" variant="statusInfoSubtle"></auro-icon> status info subtle<br />
<auro-icon category="interface" name="pin-trip" variant="statusSuccessSubtle"></auro-icon> status success subtle<br />
<auro-icon category="interface" name="pin-trip" variant="statusWarningSubtle"></auro-icon> status warning subtle<br />
<auro-icon category="interface" name="pin-trip" variant="statusErrorSubtle"></auro-icon> status error subtle<br />
<auro-icon category="interface" name="pin-trip" variant="fareBasicEconomy"></auro-icon> fare basic economy<br />
<auro-icon category="interface" name="pin-trip" variant="fareBusiness"></auro-icon> fare business<br />
<auro-icon category="interface" name="pin-trip" variant="fareEconomy"></auro-icon> fare economy<br />
<auro-icon category="interface" name="pin-trip" variant="fareFirst"></auro-icon> fare first<br />
<auro-icon category="interface" name="pin-trip" variant="farePremiumEconomy"></auro-icon> fare premium economy<br />
<auro-icon category="interface" name="pin-trip" variant="tierOneWorldEmerald"></auro-icon> fare oneworld emerald<br />
<auro-icon category="interface" name="pin-trip" variant="tierOneWorldSapphire"></auro-icon> fare oneworld sapphire<br />
<auro-icon category="interface" name="pin-trip" variant="tierOneWorldRuby"></auro-icon> fare oneworld ruby<br />
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### onDark visual state

All compatible with `onDark` attribute.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/onDark.html) -->
  <!-- The below content is automatically added from ../apiExamples/onDark.html -->
  <span style="color: var(--ds-basic-color-texticon-inverse)">
    <auro-icon category="interface" name="pin-trip" onDark></auro-icon> default<br />
    <auro-icon category="interface" name="pin-trip" onDark variant="disabled"></auro-icon> disabled<br />
    <auro-icon category="interface" name="pin-trip" onDark variant="muted"></auro-icon> muted<br />
    <auro-icon category="interface" name="pin-trip" onDark variant="statusError"></auro-icon> status error<br />
  </span>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/onDark.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/onDark.html -->

```html
<span style="color: var(--ds-basic-color-texticon-inverse)">
  <auro-icon category="interface" name="pin-trip" onDark></auro-icon> default<br />
  <auro-icon category="interface" name="pin-trip" onDark variant="disabled"></auro-icon> disabled<br />
  <auro-icon category="interface" name="pin-trip" onDark variant="muted"></auro-icon> muted<br />
  <auro-icon category="interface" name="pin-trip" onDark variant="statusError"></auro-icon> status error<br />
</span>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom Color

The `auro-icon` by default apply the `primary` selector for color application. This can be over written using the defined API listed above. Custom colors are also allowed when using the `customColor` attribute and a parent element with a color setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/customColor.html) -->
  <!-- The below content is automatically added from ../apiExamples/customColor.html -->
  <auro-icon category="interface" name="pin-trip" ></auro-icon> default inherits color<br/>
  <auro-icon category="interface" name="pin-trip" customColor></auro-icon> applies primary color selector<br/>
  <auro-icon category="interface" name="pin-trip" customColor style="color: orange;"></auro-icon> applies the color from the style attribute
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/customColor.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/customColor.html -->

```html
<auro-icon category="interface" name="pin-trip" ></auro-icon> default inherits color<br/>
<auro-icon category="interface" name="pin-trip" customColor></auro-icon> applies primary color selector<br/>
<auro-icon category="interface" name="pin-trip" customColor style="color: orange;"></auro-icon> applies the color from the style attribute
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/tokens.scss -->

```scss
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/auro-classic/SCSSVariables";
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/alaska/SCSSVariables--alaska";

:host {
  // COLOR
  --ds-auro-icon-color: var(--ds-basic-color-texticon-default, #{$ds-basic-color-texticon-default});
  --ds-auro-alaska-color: #02426D; // Hardcoded hex value for logo in order to prevent color change

  // SIZE
  --ds-auro-icon-size: var(--ds-size-300, #{$ds-size-300});
}
```
<!-- AURO-GENERATED-CONTENT:END -->

### Custom Size

Auro Icon supports setting a custom size using the `--ds-auro-icon-size` token. The icons height and width will be set to the token value, preserving the square shape that is standard for all icons.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/customSize.html) -->
  <!-- The below content is automatically added from ../apiExamples/customSize.html -->
  <auro-icon style="--ds-auro-icon-size: 30rem;" category="interface" name="pin-trip" variant="statusSuccess"></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/customSize.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/customSize.html -->

```html
<auro-icon style="--ds-auro-icon-size: 30rem;" category="interface" name="pin-trip" variant="statusSuccess"></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
