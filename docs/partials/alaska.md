# Alaska

The `auro-alaska` custom element is more than just an easy-to-use placement of the official logo, but it also comes with automation that will produce the proper version of the logo depending on the size of the parent container.

## Install

```bash
import "@alaskaairux/auro-icon/dist/auro-alaska";
```

## Default component

<div class="exampleWrapper">
  <auro-alaska style="width: 192px"></auro-alaska>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alaska style="width: 192px"></auro-alaska>
  ```

</auro-accordion>

<div class="exampleWrapper--ondark">
  <auro-alaska onDark style="width: 192px"></auro-alaska>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alaska onDark style="width: 192px"></auro-alaska>
  ```

</auro-accordion>

## Official logo with tagline

Using the `official` property will display the Alaska Airlines logo with the official tagline.

<div class="exampleWrapper">
  <auro-alaska official style="width: 192px"></auro-alaska>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alaska official style="width: 192px"></auro-alaska>
  ```

</auro-accordion>

<div class="exampleWrapper--ondark">
  <auro-alaska official ondark style="width: 192px"></auro-alaska>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alaska official ondark style="width: 192px"></auro-alaska>
  ```

</auro-accordion>

## Auto scale support

The Alaska Airline logo has a preferred version of the logo depending in the size of the rendering. The auro-alaska custom element is auto-aware and will display the proper version of the logo depending on the size of the container automatically.

<div class="exampleWrapper">
  <auro-alaska style="width: 72px"></auro-alaska><br>
  <auro-alaska style="width: 108px"></auro-alaska><br>
  <auro-alaska style="width: 192px"></auro-alaska><br>
  <auro-alaska style="width: 528px"></auro-alaska>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alaska style="width: 72px"></auro-alaska>
  <auro-alaska style="width: 108px"></auro-alaska>
  <auro-alaska style="width: 192px"></auro-alaska>
  <auro-alaska style="width: 528px"></auro-alaska>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-alaska official style="width: 72px"></auro-alaska><br>
  <auro-alaska official style="width: 108px"></auro-alaska><br>
  <auro-alaska official style="width: 192px"></auro-alaska><br>
  <auro-alaska official style="width: 528px"></auro-alaska>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alaska official style="width: 72px"></auro-alaska>
  <auro-alaska official style="width: 108px"></auro-alaska>
  <auro-alaska official style="width: 192px"></auro-alaska>
  <auro-alaska official style="width: 528px"></auro-alaska>
  ```

</auro-accordion>