# Icon

Icons can be used to represent concepts or provide context to options and/or actions within an experience.

The `auro-icon` web component comes pre-configured with all the available [Auro Icons](/icons/usage) . Simply add the `category` and `name` of the icon for quick and easy results.

## Default component

<div class="exampleWrapper">
  <auro-icon category="logos" name="alaska"></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
  ```

</auro-accordion>

## Default component with a11y description

If assistive technologies are needed to read back a description of the icon, simply add content within the element that will be hidden from view, but read back by screen readers.

<div class="exampleWrapper">
  <auro-icon category="terminal" name="plane-diag-fill">Icon: plane-diag-fill</auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon category="terminal" name="plane-diag-fill">Icon: plane-diag-fill</auro-icon>
  ```

</auro-accordion>

## Icons illustrating visual state

Mono-color icons support the following attributes to illustrate visual state. The `primary` attribute is assigned by default. Other attributes, `emphasis`, `accent`, `disabled`, `error`, `success`, and `advisory` are available.

See the [API](/components/auro/icon/api) for details and use cases.

<div class="exampleWrapper">
  <auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" emphasis></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" accent></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" disabled></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" error></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" success></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" advisory></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" emphasis></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" accent></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" disabled></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" error></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" success></auro-icon>
  <auro-icon category="terminal" name="plane-diag-fill" advisory></auro-icon>
  ```

</auro-accordion>

All compatible with `ondark` attribute.

<div class="exampleWrapper--ondark">
  <auro-icon ondark category="terminal" name="plane-diag-fill"></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" emphasis></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" accent></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" disabled></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" error></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" success></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" advisory></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon ondark category="terminal" name="plane-diag-fill"></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" emphasis></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" accent></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" disabled></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" error></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" success></auro-icon>
  <auro-icon ondark category="terminal" name="plane-diag-fill" advisory></auro-icon>
  ```

</auro-accordion>

## Custom color

The `auro-icon` by default apply the `primary` selector for color application. This can be over written using the defined API listed above. Custom colors are also allowed when using the `customColor` attribute and a parent element with a color setting.

<div class="exampleWrapper">
  <auro-icon category="terminal" name="plane-diag-fill" customColor style="color: orange"></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon
    category="terminal"
    name="plane-diag-fill"
    customColor
    style="color: orange">
  </auro-icon>

  ```

</auro-accordion>

## Custom size

Auro icon's by default are set to the value of the `--auro-size-lg` token. To customize the icon size, add the `customSize` attribute and adjust the `width` of the parent element.

<div class="exampleWrapper">
  <auro-icon style="width: 30rem" category="terminal" name="plane-diag-fill" success customSize></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon
    style="width: 30rem"
    customSize
    category="terminal"
    name="plane-diag-fill"
    success >
  </auro-icon>

  ```

</auro-accordion>
