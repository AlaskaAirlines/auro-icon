<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom SVG icons

Using the `customSvg` attribute, the component may render any icon svg content required. The `auro-icon` component will continue to render with all the variant and theme styles applied.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/customSvg.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/customSvg.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Default component with label (accessibility recommendation)

While you may place the icon alone, it is considered best practice to combine the icon with a description statement. The `auro-icon` element easily supports this with the use of the `label` attribute. By using the `label` attribute, content you enter into the `slot` of the element will appear next to the icon of choice. Changing the `aria-hidden` state of the icon is NOT needed. The assistive technologies will bypass the icon and announce the label string of content.

In situations where the icon is to be listed with a descriptive label, simply use the `label` attribute and the text in the `slot` will appear next to the icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/accessRec.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/accessRec.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Icons illustrating visual state

Mono-color icons support the following attributes to illustrate visual state.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/visualState.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/visualState.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### onDark visual state

All compatible with `onDark` attribute.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/onDark.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom Color

The `auro-icon` by default apply the `primary` selector for color application. This can be over written using the defined API listed above. Custom colors are also allowed when using the `customColor` attribute and a parent element with a color setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/customColor.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/customColor.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->

### Custom Size

Auro Icon supports setting a custom size using the `--ds-auro-icon-size` token. The icons height and width will be set to the token value, preserving the square shape that is standard for all icons.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/customSize.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/customSize.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
