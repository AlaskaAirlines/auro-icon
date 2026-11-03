<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component example code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Icon

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
Icons represent concepts and add context to options and actions.

The `<auro-icon>` element can show any icon in the [Auro icon library](https://auro.alaskaair.com/icons). Set the icon's `category` and `name`.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
Use `<auro-icon>` when people:

* Benefit from an icon that adds context to nearby text
* Need to quickly recognize an action or option by its icon
* Rely on visual cues to find their way around an interface
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-icon/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-icon/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-icon?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-icon)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-icon?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-icon</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Import the component in each project that uses `<auro-icon>`.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-icon";</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
If your project can't process JS assets, use the pre-processed assets. Legacy browsers, such as IE11, aren't supported.

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-icon@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

## Basic example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-icon category="interface" name="pin-trip-filled"&gt;Your trip starts here&lt;/auro-icon&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->

## Custom component registration for version management

Every Auro component has two key parts: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

Installing the component as described in the Install section imports the class and registers the component globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), register the class manually under a custom element name to avoid conflicts.

To do this, import only the component class and call the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

<pre class="language-js"><code class="language-js">// Import the class only
import { AuroIcon } from '@aurodesignsystem/auro-icon/class';
&#10;// Register with a custom name if desired
AuroIcon.register('custom-icon');</code></pre>

This creates a `<custom-icon>` element that works the same as `<auro-icon>` and doesn't conflict with it on the same page.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
<!-- The below content is automatically added from ./apiExamples/custom.html -->
<custom-icon category="interface" name="pin-trip-filled">Your trip starts here</custom-icon>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

<pre class="language-html"><code class="language-html">&lt;custom-icon category="interface" name="pin-trip-filled"&gt;Your trip starts here&lt;/custom-icon&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
