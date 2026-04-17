<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

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
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-icon category="interface" name="pin-trip"></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-icon category="interface" name="pin-trip"></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Accessibility

#### Default Component with Label (Accessibility Recommendation)

While you may place the icon alone, it is considered best practice to combine the icon with a description statement.
The `auro-icon` element easily supports this with the use of the `label` attribute.
By using the `label` attribute, content you enter into the `slot` of the element will appear next to the icon of choice.
Changing the `aria-hidden` state of the icon is NOT needed. The assistive technologies will bypass the icon and announce the label string of content.

In situations where the icon is to be listed with a descriptive label, simply use the `label` attribute and the text in the `slot` will appear next to the icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/access-rec.html) -->
  <!-- The below content is automatically added from ../apiExamples/access-rec.html -->
  <auro-icon label category="in-flight" name="wifi">Your flight is enabled with super fast Wi-Fi</auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/access-rec.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/access-rec.html -->

```html
<auro-icon label category="in-flight" name="wifi">Your flight is enabled with super fast Wi-Fi</auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Aria Hidden

By default `aria-hidden` on the SVG inside the `auro-icon` element is set to `true`. Using the `ariaHidden` attribute on `auro-icon` you can set that value to `false`. This will allow the screen reader to announce the content from the SVG's `title` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/aria-hidden.html) -->
  <!-- The below content is automatically added from ../apiExamples/aria-hidden.html -->
  <auro-icon category="interface" name="pin-trip" ariaHidden="false"></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/aria-hidden.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/aria-hidden.html -->

```html
<auro-icon category="interface" name="pin-trip" ariaHidden="false"></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Alter the Accessibility Description

If the description you intend to be read back is different than the content in the default `title` element of the SVG, leave the `aria-hidden="true"` default on the SVG and enter the custom description into the `auro-icon` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/access-descr.html) -->
  <!-- The below content is automatically added from ../apiExamples/access-descr.html -->
  <auro-icon category="interface" name="pin-trip">Your trip starts here!</auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/access-descr.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/access-descr.html -->

```html
<auro-icon category="interface" name="pin-trip">Your trip starts here!</auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom Color

The `auro-icon` by default apply the `primary` selector for color application. This can be over written using the defined API listed above. Custom colors are also allowed when using the `customColor` attribute and a parent element with a color setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-color.html) -->
  <!-- The below content is automatically added from ../apiExamples/custom-color.html -->
  <auro-icon category="interface" name="pin-trip" ></auro-icon> default inherits color<br/>
  <auro-icon category="interface" name="pin-trip" customColor></auro-icon> applies primary color selector<br/>
  <auro-icon category="interface" name="pin-trip" customColor style="color: orange;"></auro-icon> applies the color from the style attribute
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-color.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-color.html -->

```html
<auro-icon category="interface" name="pin-trip" ></auro-icon> default inherits color<br/>
<auro-icon category="interface" name="pin-trip" customColor></auro-icon> applies primary color selector<br/>
<auro-icon category="interface" name="pin-trip" customColor style="color: orange;"></auro-icon> applies the color from the style attribute
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom Size

Auro Icon supports setting a custom size using the `--ds-auro-icon-size` token. The icons height and width will be set to the token value, preserving the square shape that is standard for all icons.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-size.html) -->
  <!-- The below content is automatically added from ../apiExamples/custom-size.html -->
  <auro-icon style="--ds-auro-icon-size: 30rem;" category="interface" name="pin-trip" variant="statusSuccess"></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-size.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-size.html -->

```html
<auro-icon style="--ds-auro-icon-size: 30rem;" category="interface" name="pin-trip" variant="statusSuccess"></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom SVG

Using the `customSvg` attribute, the component may render any icon svg content required. The `auro-icon` component will continue to render with all the variant and theme styles applied.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-svg.html) -->
  <!-- The below content is automatically added from ../apiExamples/custom-svg.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-svg.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-svg.html -->

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

### Label with typography classes

When using the `label` attribute, you may apply typography classes to the `slot` element to match your design system needs.

Below is an example of mixing and matching typography styles with the `auro-icon` component.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/typography.html) -->
  <!-- The below content is automatically added from ../apiExamples/typography.html -->
  <auro-icon category="interface" name="chevron-right" label>Icon with body-default slot (Recommended)</span></auro-icon>
  <div class="body-default"><auro-icon category="interface" name="chevron-right"></auro-icon>Icon inside of body-default container</div>
  <auro-icon category="interface" name="chevron-right"></auro-icon><span class="body-default">Icon next to body-default text</span>
  <br><br>
  <auro-icon category="interface" name="chevron-right" label class="heading-lg">Icon with heading-lg slot (Recommended)</auro-icon>
  <div class="heading-lg"><auro-icon category="interface" name="chevron-right"></auro-icon>Icon inside of heading-lg container</div>
  <auro-icon category="interface" name="chevron-right"></auro-icon><span class="heading-lg">Icon next to heading-lg text</span>
  <br><br>
  <auro-icon category="interface" name="chevron-right" label class="body-xs">Icon with body-xs slot (Recommended)</auro-icon>
  <div class="body-xs"><auro-icon category="interface" name="chevron-right"></auro-icon>Icon inside of body-xs container</div>
  <auro-icon category="interface" name="chevron-right"></auro-icon><span class="body-xs">Icon next to body-xs text</span>
  <br><br>
  <auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 3rem" label>Big icon with slotted text (Recommended)</auro-icon>
  <div><auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 3rem"></auro-icon>Big icon next to text</div>
  <br><br>
  <auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 0.8rem" label>Small icon with slotted text (Recommended)</auro-icon>
  <div><auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 0.8rem"></auro-icon>Small icon next to text</div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/typography.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/typography.html -->

```html
<auro-icon category="interface" name="chevron-right" label>Icon with body-default slot (Recommended)</span></auro-icon>
<div class="body-default"><auro-icon category="interface" name="chevron-right"></auro-icon>Icon inside of body-default container</div>
<auro-icon category="interface" name="chevron-right"></auro-icon><span class="body-default">Icon next to body-default text</span>
<br><br>
<auro-icon category="interface" name="chevron-right" label class="heading-lg">Icon with heading-lg slot (Recommended)</auro-icon>
<div class="heading-lg"><auro-icon category="interface" name="chevron-right"></auro-icon>Icon inside of heading-lg container</div>
<auro-icon category="interface" name="chevron-right"></auro-icon><span class="heading-lg">Icon next to heading-lg text</span>
<br><br>
<auro-icon category="interface" name="chevron-right" label class="body-xs">Icon with body-xs slot (Recommended)</auro-icon>
<div class="body-xs"><auro-icon category="interface" name="chevron-right"></auro-icon>Icon inside of body-xs container</div>
<auro-icon category="interface" name="chevron-right"></auro-icon><span class="body-xs">Icon next to body-xs text</span>
<br><br>
<auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 3rem" label>Big icon with slotted text (Recommended)</auro-icon>
<div><auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 3rem"></auro-icon>Big icon next to text</div>
<br><br>
<auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 0.8rem" label>Small icon with slotted text (Recommended)</auro-icon>
<div><auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 0.8rem"></auro-icon>Small icon next to text</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variants

#### Icons illustrating Visual State

Mono-color icons support the following `variant` types to illustrate visual state.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/visual-state.html) -->
  <!-- The below content is automatically added from ../apiExamples/visual-state.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/visual-state.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/visual-state.html -->

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

#### Visual State on Dark background

All compatible with `appearance="inverse"` attribute.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/appearance-inverse.html) -->
  <!-- The below content is automatically added from ../apiExamples/appearance-inverse.html -->
  <span style="color: var(--ds-basic-color-texticon-inverse)">
    <auro-icon category="interface" name="pin-trip" appearance="inverse"></auro-icon> default<br />
    <auro-icon category="interface" name="pin-trip" appearance="inverse" variant="disabled"></auro-icon> disabled<br />
    <auro-icon category="interface" name="pin-trip" appearance="inverse" variant="muted"></auro-icon> muted<br />
    <auro-icon category="interface" name="pin-trip" appearance="inverse" variant="statusError"></auro-icon> status error<br />
  </span>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/appearance-inverse.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/appearance-inverse.html -->

```html
<span style="color: var(--ds-basic-color-texticon-inverse)">
  <auro-icon category="interface" name="pin-trip" appearance="inverse"></auro-icon> default<br />
  <auro-icon category="interface" name="pin-trip" appearance="inverse" variant="disabled"></auro-icon> disabled<br />
  <auro-icon category="interface" name="pin-trip" appearance="inverse" variant="muted"></auro-icon> muted<br />
  <auro-icon category="interface" name="pin-trip" appearance="inverse" variant="statusError"></auro-icon> status error<br />
</span>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Fallback Icons

When an icon is not found, the component will attempt to render a fallback icon. By default, the error icon will be used. If the name of the icon starts with `tail-`, the component will attempt to render the default tail logo as a fallback. 

<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/fallback.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/fallback.html -->

```html
<!-- Default Fallback Icon -->
<auro-icon category="interface" name="icon-INVALID"></auro-icon>
<!-- Tail Fallback Icon -->
<auro-icon category="logos" name="tail-INVALID"></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  // COLOR
  --ds-auro-icon-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
  --ds-auro-alaska-color: #02426D; // Hardcoded hex value for logo in order to prevent color change

  // SIZE
  --ds-auro-icon-size: var(--ds-size-300, #{vac.$ds-size-300});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
