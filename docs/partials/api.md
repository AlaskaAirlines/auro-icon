<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### Accessibility

#### Default component with label (accessibility recommendation)

Pair an icon with a text label whenever possible. Put the text in the default slot and add the `label` attribute to show it next to the icon.

Screen readers skip the icon's graphic and read the label, so you don't need to change `ariaHidden`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/access-rec.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/access-rec.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### ARIA hidden

By default, screen readers skip the icon's graphic. To expose it, set `ariaHidden="false"` (not the native `aria-hidden`); screen readers then announce the icon's built-in description. Some library icons, such as `wifi`, don't have one and stay hidden. If the icon first renders with `ariaHidden="true"`, changing it to `false` later doesn't currently restore the description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/aria-hidden.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/aria-hidden.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Alter the accessibility description

To describe an icon to screen readers without showing any text, put the description in the default slot and leave `label` off. The text stays hidden on screen, and screen readers read it in place of the graphic.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/access-descr.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/access-descr.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom color

By default, the icon uses the standard text-and-icon color, or the color of its `variant`. Add the `customColor` attribute to make the icon inherit the color of its surrounding text instead, then set that color on the icon or a parent element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-color.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-color.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom size

Set the `--ds-auro-icon-size` custom property to change the icon's size. It sets both the width and height, so the icon stays square.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-size.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-size.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom SVG

Add the `customSvg` attribute and put your own `<svg>` in the `svg` slot to show it in place of a library icon. Give the SVG a `viewBox` and no `width` or `height`, so `--ds-auro-icon-size` sizes it like a library icon. The `variant` and `appearance` colors still apply when the SVG uses `fill: currentColor`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-svg.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-svg.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Label with typography classes

With the `label` attribute, add an Auro typography class to `auro-icon` to style its label. The examples below compare that with placing an icon inside or next to styled text.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/typography.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/typography.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Variants

#### Icons illustrating visual state

Use `variant` to color a single-color icon by meaning.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/visual-state.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/visual-state.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Visual state on dark backgrounds

On dark backgrounds, add `appearance="inverse"`. Only the `disabled`, `muted`, and `statusError` variants switch to colors designed for dark backgrounds; the other variants keep their standard colors.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/appearance-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/appearance-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common usage patterns

### Fallback icons

If an icon isn't found, `auro-icon` shows an error icon in its place. For icon names that start with `tail-`, it shows the default tail logo instead.

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/fallback.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/fallback.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Restyle with CSS custom properties

Restyle the component by changing the values of the following custom properties.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
