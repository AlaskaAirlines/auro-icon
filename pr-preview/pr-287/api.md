<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-alaska

Shows the Alaska Airlines logo, with or without the official tagline.

**Key capabilities**
- **Fills its container**: the logo stretches to the width of its container, and the
  artwork best suited to that width is picked when the element first renders.
- **Official tagline**: `official` switches to the logo with the tagline.
- **Light and dark backgrounds**: `appearance="inverse"` shows the logo in white for dark
  backgrounds.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-alaska&gt;&lt;/auro-alaska&gt;</code></pre>

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                   | Default   | Description                                                                                                               |
| ---------- | ---------- | --------- | ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| appearance | appearance |           | "default" \| "inverse" | `default` | Sets the component's colors for the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones. |
| official   | official   |           | boolean                | `false`   | Shows the Alaska Airlines logo with the official tagline.                                                                 |
| onDark     | ondark     |           | boolean                | `false`   | Deprecated: Use `appearance="inverse"` instead.                                                                           |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                                 |
| -------- | ------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-alaska` on the same page. |

### Slots

| Name      | Description                                                                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Extra text read by screen readers along with the logo's built-in name, "Alaska Airlines". Leave it empty unless the logo needs more context, because screen readers already announce that name. It isn't shown on screen. |

### CSS Custom Properties

| Name                   | Description        |
| ---------------------- | ------------------ |
| --ds-auro-alaska-color | Color of the logo. |

# auro-icon

Shows an icon from the Auro icon library, or a custom SVG, sized and colored to match
Auro interfaces.

**Key capabilities**
- **Library icons**: set `category` and `name` to load any icon from the Auro icon
  library.
- **Custom SVGs**: set `customSvg` and put your own `<svg>` in the `svg` slot.
- **Color**: `variant` colors the icon by meaning, such as `statusError` or `fareFirst`,
  and `customColor` makes it inherit the surrounding text color.
- **Light and dark backgrounds**: `appearance="inverse"` switches the default, `disabled`,
  `muted`, and `statusError` colors to versions designed for dark backgrounds.
- **Labels**: text in the default slot describes the icon to screen readers, and `label`
  also shows it next to the icon.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-icon category="interface" name="pin-trip"&gt;Your trip starts here&lt;/auro-icon&gt;</code></pre>

### Properties & Attributes

| Properties  | Attributes  | Modifiers | Type                                                                                                                                                                                                                                                                                                                                                                                                 | Default   | Description                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ----------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance  | appearance  |           | "default" \| "inverse"                                                                                                                                                                                                                                                                                                                                                                               | `default` | Sets the component's colors for the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones.                                                                                                                                                                                                                                      |
| ariaHidden  | ariahidden  |           | "true" \| "false"                                                                                                                                                                                                                                                                                                                                                                                    |           | Sets whether screen readers skip the icon's graphic. When unset or `true`, they skip it, so describe meaningful icons in the default slot; use `false` to have them announce the icon's built-in description. This is the `ariahidden` attribute, not the native `aria-hidden`.                                                                                |
| category    | category    |           | string                                                                                                                                                                                                                                                                                                                                                                                               |           | Sets the icon's category in the Auro icon library, such as `interface` or `in-flight`. Use it with `name`; see https://auro.alaskaair.com/icons/ways-to-use.                                                                                                                                                                                                   |
| customColor | customcolor |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Makes the icon inherit the color of the surrounding text, in place of the `variant` color or `--ds-auro-icon-color`.                                                                                                                                                                                                                                           |
| customSvg   | customsvg   |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Shows the `<svg>` in the `svg` slot instead of loading an icon from the library. `category` and `name` are ignored.                                                                                                                                                                                                                                            |
| label       | label       |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              |           | Shows the default slot's text next to the icon. Without it, the text is hidden on screen and read only by screen readers.                                                                                                                                                                                                                                      |
| name        | name        |           | string                                                                                                                                                                                                                                                                                                                                                                                               |           | Sets which icon to show, by its file name in the Auro icon library without the extension, such as `pin-trip`. Use it with `category`; see https://auro.alaskaair.com/icons/ways-to-use. If the icon isn't found, an error icon is shown instead, or the default tail logo for names that start with `tail-`.                                                   |
| variant     | variant     |           | "accent1" \| "disabled" \| "muted" \| "statusDefault" \| "statusInfo" \| "statusSuccess" \| "statusWarning" \| "statusError" \| "statusInfoSubtle" \| "statusSuccessSubtle" \| "statusWarningSubtle" \| "statusErrorSubtle" \| "fareBasicEconomy" \| "fareBusiness" \| "fareEconomy" \| "fareFirst" \| "farePremiumEconomy" \| "tierOneWorldEmerald" \| "tierOneWorldSapphire" \| "tierOneWorldRuby" |           | Sets the icon's color to match its meaning: an emphasis or state (`accent1`, `disabled`, `muted`), a status (`status*`), a fare class (`fare*`), or a oneworld tier (`tierOneWorld*`). With `appearance="inverse"`, only `disabled`, `muted`, and `statusError` switch to colors designed for dark backgrounds; the other variants keep their standard colors. |
| onDark      | ondark      |           | boolean                                                                                                                                                                                                                                                                                                                                                                                              | `false`   | Deprecated: Use `appearance="inverse"` instead.                                                                                                                                                                                                                                                                                                                |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                               |
| -------- | ------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-icon` on the same page. |

### Slots

| Name      | Description                                                                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Text that describes the icon to screen readers, such as "Your trip starts here". Leave it empty for decorative icons, which screen readers skip. It's shown on screen only when `label` is set. |
| svg       | The custom `<svg>` to show in place of a library icon.                                                                                                                                          |

### CSS Shadow Parts

| Name  | Description                                                                                                                                                           |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label | The `<div>` wrapping the default slot's text, visually hidden unless `label` is set.                                                                                  |
| svg   | The `<span>` wrapping the icon's SVG. Library icons also set this part on their `<svg>`, so `::part(svg)` styles both; a custom SVG in the `svg` slot doesn't get it. |

### CSS Custom Properties

| Name                 | Description                                           |
| -------------------- | ----------------------------------------------------- |
| --ds-auro-icon-color | Color of the icon. Ignored when `customColor` is set. |
| --ds-auro-icon-size  | Width and height of the icon.                         |
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

<pre class="language-html"><code class="language-html">&lt;auro-icon category="interface" name="pin-trip"&gt;&lt;/auro-icon&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Accessibility

#### Default component with label (accessibility recommendation)

Pair an icon with a text label whenever you can. Put the text in the default slot and add the `label` attribute to show it next to the icon.

Screen readers skip the icon's graphic and read the label, so you don't need to change `ariaHidden`.

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

<pre class="language-html"><code class="language-html">&lt;auro-icon label category="in-flight" name="wifi"&gt;Your flight is enabled with super fast Wi-Fi&lt;/auro-icon&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### ARIA hidden

By default, the icon's graphic is hidden from screen readers. To expose it, set `ariaHidden="false"` (not the native `aria-hidden`); screen readers then announce the icon's built-in description.

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

<pre class="language-html"><code class="language-html">&lt;auro-icon category="interface" name="pin-trip" ariaHidden="false"&gt;&lt;/auro-icon&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Alter the accessibility description

To describe an icon to screen readers without showing any text, put the description in the default slot and leave `label` off. The text stays hidden on screen, and screen readers read it in place of the graphic.

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

<pre class="language-html"><code class="language-html">&lt;auro-icon category="interface" name="pin-trip"&gt;Your trip starts here!&lt;/auro-icon&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom color

By default, the icon uses the standard text-and-icon color, or the color of its `variant`. Add the `customColor` attribute to make the icon inherit the color of its surrounding text instead, then set that color on the icon or a parent element.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-color.html) -->
<!-- The below content is automatically added from ../apiExamples/custom-color.html -->
<auro-icon category="interface" name="pin-trip"></auro-icon> Default color<br/>
<auro-icon category="interface" name="pin-trip" customColor></auro-icon> Inherits the surrounding text color<br/>
<auro-icon category="interface" name="pin-trip" customColor style="color: orange;"></auro-icon> Uses the color from its style attribute
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-color.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-color.html -->

<pre class="language-html"><code class="language-html">&lt;auro-icon category="interface" name="pin-trip"&gt;&lt;/auro-icon&gt; Default color&lt;br/&gt;
&lt;auro-icon category="interface" name="pin-trip" customColor&gt;&lt;/auro-icon&gt; Inherits the surrounding text color&lt;br/&gt;
&lt;auro-icon category="interface" name="pin-trip" customColor style="color: orange;"&gt;&lt;/auro-icon&gt; Uses the color from its style attribute</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom size

Set the `--ds-auro-icon-size` custom property to change the icon's size. It sets both the width and height, so the icon stays square.

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

<pre class="language-html"><code class="language-html">&lt;auro-icon style="--ds-auro-icon-size: 30rem;" category="interface" name="pin-trip" variant="statusSuccess"&gt;&lt;/auro-icon&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom SVG

Add the `customSvg` attribute and put your own `<svg>` in the `svg` slot to show it in place of a library icon. The `variant` and `appearance` colors still apply when the SVG uses `fill: currentColor`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-svg.html) -->
<!-- The below content is automatically added from ../apiExamples/custom-svg.html -->
<auro-icon customSvg>
    Trip location
<svg slot="svg" viewBox="0 0 24 24" style="width: var(--ds-auro-icon-size); height: var(--ds-auro-icon-size); fill: currentColor;"><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-icon>
<auro-icon customSvg variant="statusSuccess">
    Trip location
<svg slot="svg" viewBox="0 0 24 24" style="width: var(--ds-auro-icon-size); height: var(--ds-auro-icon-size); fill: currentColor;"><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-icon>
<auro-icon customSvg variant="statusError">
    Trip location
<svg slot="svg" viewBox="0 0 24 24" style="width: var(--ds-auro-icon-size); height: var(--ds-auro-icon-size); fill: currentColor;"><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-icon>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-svg.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-svg.html -->

<pre class="language-html"><code class="language-html">&lt;auro-icon customSvg&gt;
  Trip location
  &lt;svg slot="svg" viewBox="0 0 24 24" style="width: var(--ds-auro-icon-size); height: var(--ds-auro-icon-size); fill: currentColor;"&gt;&lt;path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"&gt;&lt;/path&gt;&lt;/svg&gt;
&lt;/auro-icon&gt;
&lt;auro-icon customSvg variant="statusSuccess"&gt;
  Trip location
  &lt;svg slot="svg" viewBox="0 0 24 24" style="width: var(--ds-auro-icon-size); height: var(--ds-auro-icon-size); fill: currentColor;"&gt;&lt;path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"&gt;&lt;/path&gt;&lt;/svg&gt;
&lt;/auro-icon&gt;
&lt;auro-icon customSvg variant="statusError"&gt;
  Trip location
  &lt;svg slot="svg" viewBox="0 0 24 24" style="width: var(--ds-auro-icon-size); height: var(--ds-auro-icon-size); fill: currentColor;"&gt;&lt;path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"&gt;&lt;/path&gt;&lt;/svg&gt;
&lt;/auro-icon&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Label with typography classes

With the `label` attribute, add an Auro typography class to `auro-icon` to style its label. The examples below compare that with placing an icon inside or next to styled text.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/typography.html) -->
<!-- The below content is automatically added from ../apiExamples/typography.html -->
<auro-icon category="interface" name="chevron-right" label class="body-default">Icon with a body-default label (recommended)</auro-icon>
<div class="body-default"><auro-icon category="interface" name="chevron-right"></auro-icon>Icon inside a body-default container</div>
<auro-icon category="interface" name="chevron-right"></auro-icon><span class="body-default">Icon next to body-default text</span>
<br><br>
<auro-icon category="interface" name="chevron-right" label class="heading-lg">Icon with a heading-lg label (recommended)</auro-icon>
<div class="heading-lg"><auro-icon category="interface" name="chevron-right"></auro-icon>Icon inside a heading-lg container</div>
<auro-icon category="interface" name="chevron-right"></auro-icon><span class="heading-lg">Icon next to heading-lg text</span>
<br><br>
<auro-icon category="interface" name="chevron-right" label class="body-xs">Icon with a body-xs label (recommended)</auro-icon>
<div class="body-xs"><auro-icon category="interface" name="chevron-right"></auro-icon>Icon inside a body-xs container</div>
<auro-icon category="interface" name="chevron-right"></auro-icon><span class="body-xs">Icon next to body-xs text</span>
<br><br>
<auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 3rem" label>Large icon with a label (recommended)</auro-icon>
<div><auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 3rem"></auro-icon>Large icon next to text</div>
<br><br>
<auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 0.8rem" label>Small icon with a label (recommended)</auro-icon>
<div><auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 0.8rem"></auro-icon>Small icon next to text</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/typography.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/typography.html -->

<pre class="language-html"><code class="language-html">&lt;auro-icon category="interface" name="chevron-right" label class="body-default"&gt;Icon with a body-default label (recommended)&lt;/auro-icon&gt;
&lt;div class="body-default"&gt;&lt;auro-icon category="interface" name="chevron-right"&gt;&lt;/auro-icon&gt;Icon inside a body-default container&lt;/div&gt;
&lt;auro-icon category="interface" name="chevron-right"&gt;&lt;/auro-icon&gt;&lt;span class="body-default"&gt;Icon next to body-default text&lt;/span&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-icon category="interface" name="chevron-right" label class="heading-lg"&gt;Icon with a heading-lg label (recommended)&lt;/auro-icon&gt;
&lt;div class="heading-lg"&gt;&lt;auro-icon category="interface" name="chevron-right"&gt;&lt;/auro-icon&gt;Icon inside a heading-lg container&lt;/div&gt;
&lt;auro-icon category="interface" name="chevron-right"&gt;&lt;/auro-icon&gt;&lt;span class="heading-lg"&gt;Icon next to heading-lg text&lt;/span&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-icon category="interface" name="chevron-right" label class="body-xs"&gt;Icon with a body-xs label (recommended)&lt;/auro-icon&gt;
&lt;div class="body-xs"&gt;&lt;auro-icon category="interface" name="chevron-right"&gt;&lt;/auro-icon&gt;Icon inside a body-xs container&lt;/div&gt;
&lt;auro-icon category="interface" name="chevron-right"&gt;&lt;/auro-icon&gt;&lt;span class="body-xs"&gt;Icon next to body-xs text&lt;/span&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 3rem" label&gt;Large icon with a label (recommended)&lt;/auro-icon&gt;
&lt;div&gt;&lt;auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 3rem"&gt;&lt;/auro-icon&gt;Large icon next to text&lt;/div&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 0.8rem" label&gt;Small icon with a label (recommended)&lt;/auro-icon&gt;
&lt;div&gt;&lt;auro-icon category="interface" name="chevron-right" style="--ds-auro-icon-size: 0.8rem"&gt;&lt;/auro-icon&gt;Small icon next to text&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variants

#### Icons illustrating visual state

Use `variant` to color a single-color icon by meaning.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/visual-state.html) -->
<!-- The below content is automatically added from ../apiExamples/visual-state.html -->
<auro-icon category="interface" name="pin-trip"></auro-icon> Default<br />
<auro-icon category="interface" name="pin-trip" variant="disabled"></auro-icon> Disabled<br />
<auro-icon category="interface" name="pin-trip" variant="muted"></auro-icon> Muted<br />
<auro-icon category="interface" name="pin-trip" variant="accent1"></auro-icon> Accent1<br />
<auro-icon category="interface" name="pin-trip" variant="statusDefault"></auro-icon> Status default<br />
<auro-icon category="interface" name="pin-trip" variant="statusInfo"></auro-icon> Status info<br />
<auro-icon category="interface" name="pin-trip" variant="statusSuccess"></auro-icon> Status success<br />
<auro-icon category="interface" name="pin-trip" variant="statusWarning"></auro-icon> Status warning<br />
<auro-icon category="interface" name="pin-trip" variant="statusError"></auro-icon> Status error<br />
<auro-icon category="interface" name="pin-trip" variant="statusInfoSubtle"></auro-icon> Status info subtle<br />
<auro-icon category="interface" name="pin-trip" variant="statusSuccessSubtle"></auro-icon> Status success subtle<br />
<auro-icon category="interface" name="pin-trip" variant="statusWarningSubtle"></auro-icon> Status warning subtle<br />
<auro-icon category="interface" name="pin-trip" variant="statusErrorSubtle"></auro-icon> Status error subtle<br />
<auro-icon category="interface" name="pin-trip" variant="fareBasicEconomy"></auro-icon> Fare basic economy<br />
<auro-icon category="interface" name="pin-trip" variant="fareBusiness"></auro-icon> Fare business<br />
<auro-icon category="interface" name="pin-trip" variant="fareEconomy"></auro-icon> Fare economy<br />
<auro-icon category="interface" name="pin-trip" variant="fareFirst"></auro-icon> Fare first<br />
<auro-icon category="interface" name="pin-trip" variant="farePremiumEconomy"></auro-icon> Fare premium economy<br />
<auro-icon category="interface" name="pin-trip" variant="tierOneWorldEmerald"></auro-icon> oneworld Emerald tier<br />
<auro-icon category="interface" name="pin-trip" variant="tierOneWorldSapphire"></auro-icon> oneworld Sapphire tier<br />
<auro-icon category="interface" name="pin-trip" variant="tierOneWorldRuby"></auro-icon> oneworld Ruby tier<br />
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/visual-state.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/visual-state.html -->

<pre class="language-html"><code class="language-html">&lt;auro-icon category="interface" name="pin-trip"&gt;&lt;/auro-icon&gt; Default&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="disabled"&gt;&lt;/auro-icon&gt; Disabled&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="muted"&gt;&lt;/auro-icon&gt; Muted&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="accent1"&gt;&lt;/auro-icon&gt; Accent1&lt;br /&gt;
&#10;&lt;auro-icon category="interface" name="pin-trip" variant="statusDefault"&gt;&lt;/auro-icon&gt; Status default&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="statusInfo"&gt;&lt;/auro-icon&gt; Status info&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="statusSuccess"&gt;&lt;/auro-icon&gt; Status success&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="statusWarning"&gt;&lt;/auro-icon&gt; Status warning&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="statusError"&gt;&lt;/auro-icon&gt; Status error&lt;br /&gt;
&#10;&lt;auro-icon category="interface" name="pin-trip" variant="statusInfoSubtle"&gt;&lt;/auro-icon&gt; Status info subtle&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="statusSuccessSubtle"&gt;&lt;/auro-icon&gt; Status success subtle&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="statusWarningSubtle"&gt;&lt;/auro-icon&gt; Status warning subtle&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="statusErrorSubtle"&gt;&lt;/auro-icon&gt; Status error subtle&lt;br /&gt;
&#10;&lt;auro-icon category="interface" name="pin-trip" variant="fareBasicEconomy"&gt;&lt;/auro-icon&gt; Fare basic economy&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="fareBusiness"&gt;&lt;/auro-icon&gt; Fare business&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="fareEconomy"&gt;&lt;/auro-icon&gt; Fare economy&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="fareFirst"&gt;&lt;/auro-icon&gt; Fare first&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="farePremiumEconomy"&gt;&lt;/auro-icon&gt; Fare premium economy&lt;br /&gt;
&#10;&lt;auro-icon category="interface" name="pin-trip" variant="tierOneWorldEmerald"&gt;&lt;/auro-icon&gt; oneworld Emerald tier&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="tierOneWorldSapphire"&gt;&lt;/auro-icon&gt; oneworld Sapphire tier&lt;br /&gt;
&lt;auro-icon category="interface" name="pin-trip" variant="tierOneWorldRuby"&gt;&lt;/auro-icon&gt; oneworld Ruby tier&lt;br /&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Visual state on dark backgrounds

On dark backgrounds, add `appearance="inverse"`. Only the `disabled`, `muted`, and `statusError` variants switch to colors designed for dark backgrounds; the other variants keep their standard colors.

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

<pre class="language-html"><code class="language-html">&lt;span style="color: var(--ds-basic-color-texticon-inverse)"&gt;
  &lt;auro-icon category="interface" name="pin-trip" appearance="inverse"&gt;&lt;/auro-icon&gt; default&lt;br /&gt;
  &lt;auro-icon category="interface" name="pin-trip" appearance="inverse" variant="disabled"&gt;&lt;/auro-icon&gt; disabled&lt;br /&gt;
  &lt;auro-icon category="interface" name="pin-trip" appearance="inverse" variant="muted"&gt;&lt;/auro-icon&gt; muted&lt;br /&gt;
  &lt;auro-icon category="interface" name="pin-trip" appearance="inverse" variant="statusError"&gt;&lt;/auro-icon&gt; status error&lt;br /&gt;
&lt;/span&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Fallback icons

If an icon isn't found, an error icon is shown in its place. For icon names that start with `tail-`, the default tail logo is shown instead.

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/fallback.html) -->
<!-- The below content is automatically added from ../apiExamples/fallback.html -->
<!-- Default Fallback Icon -->
Default fallback: <auro-icon category="interface" name="icon-INVALID"></auro-icon>
<!-- Tail Fallback Icon -->
Tail logo fallback: <auro-icon category="logos" name="tail-INVALID"></auro-icon>
<!-- AURO-GENERATED-CONTENT:END -->
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/fallback.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/fallback.html -->

<pre class="language-html"><code class="language-html">&lt;!-- Default Fallback Icon --&gt;
Default fallback: &lt;auro-icon category="interface" name="icon-INVALID"&gt;&lt;/auro-icon&gt;
&#10;&lt;!-- Tail Fallback Icon --&gt;
Tail logo fallback: &lt;auro-icon category="logos" name="tail-INVALID"&gt;&lt;/auro-icon&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following custom properties.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  // COLOR
  --ds-auro-icon-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
  --ds-auro-alaska-color: #02426D; // Hardcoded hex value for logo in order to prevent color change
&#10;  // SIZE
  --ds-auro-icon-size: var(--ds-size-300, #{vac.$ds-size-300});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
