# Icon

Icons can be used to represent concepts or provide context to options and/or actions within an experience.

The `auro-icon` web component comes pre-configured with all the available [Auro Icons](https://auro.alaskaair.com/icons) . Simply add the `category` and `name` of the icon for quick and easy results.

## Default component

The following is an example of the default use of the `auro-icon` element.

<div class="exampleWrapper">
  <auro-icon category="interface" name="pin-trip"></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon category="interface" name="pin-trip"></auro-icon>
  ```

</auro-accordion>

## Accessibility

By default `aria-hidden` on the SVG inside the `auro-icon` element is set to `true`. Using the `ariaHidden` attribute on `auro-icon` you can set that value to `false`. This will allow the screen reader to announce the content from the SVG's `title` element.

<div class="exampleWrapper">
  <auro-icon category="interface" name="pin-trip" ariaHidden="false"></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon category="interface" name="pin-trip" ariaHidden="false"></auro-icon>
  ```

</auro-accordion>

### Alter the accessibility description

If the description you intend to be read back is different than the content in the default `title` element of the SVG, leave the `aria-hidden="true"` default on the SVG and enter the custom description into the `auro-icon` slot.

<div class="exampleWrapper">
  <auro-icon category="interface" name="pin-trip">Your trip starts here!</auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon category="interface" name="pin-trip">Your trip starts here!</auro-icon>
  ```

</auro-accordion>

## Default component with label (accessibility recommendation)

While you may place the icon alone, it is considered best practice to combine the icon with a description statement. The `auro-icon` element easily supports this with the use of the `label` attribute. By using the `label` attribute, content you enter into the `slot` of the element will appear next to the icon of choice. Changing the `aria-hidden` state of the icon is NOT needed. The assistive technologies will bypass the icon and announce the label string of content.

In situations where the icon is to be listed with a descriptive label, simply use the `label` attribute and the text in the `slot` will appear next to the icon.

<div class="exampleWrapper">
  <auro-icon label category="in-flight" name="wifi">Your flight is enabled with super fast Wi-Fi</auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon label category="in-flight" name="wifi">
    Your flight is enabled with super fast Wi-Fi
  </auro-icon>
  ```

</auro-accordion>

## Icons illustrating visual state

Mono-color icons support the following attributes to illustrate visual state. The `primary` attribute is assigned by default. Other attributes, `emphasis`, `accent`, `disabled`, `error`, `success`, and `advisory` are supported.

See the [API](/components/auro/icon/api) for details and use cases.

<div class="exampleWrapper">
  <auro-icon category="interface" name="pin-trip"></auro-icon>
  <auro-icon category="interface" name="pin-trip" emphasis></auro-icon>
  <auro-icon category="interface" name="pin-trip" accent></auro-icon>
  <auro-icon category="interface" name="pin-trip" disabled></auro-icon>
  <auro-icon category="interface" name="pin-trip" error></auro-icon>
  <auro-icon category="interface" name="pin-trip" success></auro-icon>
  <auro-icon category="interface" name="pin-trip" advisory></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon category="interface" name="pin-trip"></auro-icon>
  <auro-icon category="interface" name="pin-trip" emphasis></auro-icon>
  <auro-icon category="interface" name="pin-trip" accent></auro-icon>
  <auro-icon category="interface" name="pin-trip" disabled></auro-icon>
  <auro-icon category="interface" name="pin-trip" error></auro-icon>
  <auro-icon category="interface" name="pin-trip" success></auro-icon>
  <auro-icon category="interface" name="pin-trip" advisory></auro-icon>
  ```

</auro-accordion>

All compatible with `ondark` attribute.

<div class="exampleWrapper--ondark">
  <auro-icon ondark category="interface" name="pin-trip"></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" emphasis></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" accent></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" disabled></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" error></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" success></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" advisory></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon ondark category="interface" name="pin-trip"></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" emphasis></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" accent></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" disabled></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" error></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" success></auro-icon>
  <auro-icon ondark category="interface" name="pin-trip" advisory></auro-icon>
  ```

</auro-accordion>

## Custom color

The `auro-icon` by default apply the `primary` selector for color application. This can be over written using the defined API listed above. Custom colors are also allowed when using the `customColor` attribute and a parent element with a color setting.

<div class="exampleWrapper">
  <auro-icon category="interface" name="pin-trip" ></auro-icon> default inherits color<br/>
  <auro-icon category="interface" name="pin-trip" customColor></auro-icon> applies primary color selector<br/>
  <auro-icon category="interface" name="pin-trip" customColor style="color: orange;"></auro-icon> applies the color from the style attribute
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon category="interface" name="pin-trip" ></auro-icon> default inherits color<br/>
  <auro-icon category="interface" name="pin-trip" customColor></auro-icon> applies primary color selector<br/>
  <auro-icon category="interface" name="pin-trip" customColor style="color: orange;"></auro-icon> applies the color from the style attribute
  ```

</auro-accordion>

## Custom size

Auro icon's by default are set to the value of the `--auro-size-lg` token. To customize the icon size, add the `customSize` attribute and adjust the `width` of the parent element.

<div class="exampleWrapper">
  <auro-icon style="width: 30rem" category="interface" name="pin-trip" success customSize></auro-icon>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-icon
    style="width: 30rem"
    customSize
    category="interface"
    name="pin-trip"
    success >
  </auro-icon>

  ```

</auro-accordion>
