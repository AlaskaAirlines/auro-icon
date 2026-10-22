# Alaska

The `auro-alaska` element shows the official Alaska Airlines logo. It fills the width of its container and picks the version of the logo that suits that width.

## Install

```js
import "@aurodesignsystem/auro-icon";
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
  <auro-alaska appearance="inverse" style="width: 192px"></auro-alaska>
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alaska appearance="inverse" style="width: 192px"></auro-alaska>
  ```

</auro-accordion>

## Official logo with tagline

Add the `official` attribute to show the logo with the official tagline.

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
  <auro-alaska official appearance="inverse" style="width: 192px"></auro-alaska>
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alaska official appearance="inverse" style="width: 192px"></auro-alaska>
  ```

</auro-accordion>

## Auto scale support

The Alaska Airlines logo has a version designed for each size range. `auro-alaska` picks the version that suits its container's width when it first renders. It doesn't switch versions if the container is resized later.

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
