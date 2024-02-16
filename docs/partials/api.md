<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Default component with label (accessibility recommendation)

While you may place the icon alone, it is considered best practice to combine the icon with a description statement. The `auro-icon` element easily supports this with the use of the `label` attribute. By using the `label` attribute, content you enter into the `slot` of the element will appear next to the icon of choice. Changing the `aria-hidden` state of the icon is NOT needed. The assistive technologies will bypass the icon and announce the label string of content.

In situations where the icon is to be listed with a descriptive label, simply use the `label` attribute and the text in the `slot` will appear next to the icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/accessRec.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/accessRec.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Icons illustrating visual state

Mono-color icons support the following attributes to illustrate visual state. The `primary` attribute is assigned by default. Other attributes, `emphasis`, `accent`, `disabled`, `error`, `success`, and `advisory` are supported.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/visualState.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/visualState.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### ondark visual state

All compatible with `ondark` attribute.

<div class="exampleWrapper" style="background: repeating-linear-gradient(45deg, var(--ds-color-background-darkest, #00274a), var(--ds-color-background-darkest, #00274a) 10px, var(--ds-color-background-darker, #01426a) 10px, var(--ds-color-background-darker, #01426a) 20px);">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/onDark.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom Color

The `auro-icon` by default apply the `primary` selector for color application. This can be over written using the defined API listed above. Custom colors are also allowed when using the `customColor` attribute and a parent element with a color setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customColor.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customColor.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom Size

Auro icon's by default are set to the value of the `--ds-size-300` token. To customize the icon size, add the `customSize` attribute and adjust the `width` of the parent element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customSize.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customSize.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>



