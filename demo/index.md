<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Icon

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
Icons can be used to represent concepts or provide context to options and/or actions within an experience.

The `<auro-icon>` web component comes pre-configured with all the available [Auro Icons](https://auro.alaskaair.com/icons) . Simply add the `category` and `name` of the icon for quick and easy results.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Default

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

### Accessibility

#### aria-hidden

By default `aria-hidden` on the SVG inside the `auro-icon` element is set to `true`. Using the `ariaHidden` attribute on `auro-icon` you can set that value to `false`. This will allow the screen reader to announce the content from the SVG's `title` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/ariaHidden.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/ariaHidden.html -->
  <auro-icon category="interface" name="pin-trip" ariaHidden="false"></auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/ariaHidden.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/ariaHidden.html -->

```html
<auro-icon category="interface" name="pin-trip" ariaHidden="false"></auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Alter the accessibility description

If the description you intend to be read back is different than the content in the default `title` element of the SVG, leave the `aria-hidden="true"` default on the SVG and enter the custom description into the `auro-icon` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/accessDescr.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/accessDescr.html -->
  <auro-icon category="interface" name="pin-trip">Your trip starts here!</auro-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/accessDescr.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/accessDescr.html -->

```html
<auro-icon category="interface" name="pin-trip">Your trip starts here!</auro-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-icon` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-icon';
registerComponent('custom-icon');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-icon` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-icon category="interface" name="pin-trip"></custom-icon>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-icon category="interface" name="pin-trip"></custom-icon>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
