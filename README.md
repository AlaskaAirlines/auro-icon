# auro-icon

`<auro-icon>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of displaying the [icons](https://auro.alaskaair.com/icons/usage) from the Auro Design System.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-icon/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/[namespace]-[name]/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/auro-icon?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/auro-icon)
[![License](https://img.shields.io/npm/l/@alaskaairux/auro-icon?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-icon
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-icon>` component.

```javascript
import "@alaskaairux/auro-icon";
```

**Reference component in HTML**

```html
<auro-icon category="alert" name="error" accent></auro-icon>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

**NOTE:** Be sure to replace `:version` in the URL with the version of the asset you want.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-design-tokens@latest/dist/tokens/CSSTokenProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-web-core-style-sheets@latest/dist/bundled/baseline.css" />

<script src="https://unpkg.com/@alaskaairux/auro-icon@latest/dist/polyfills.js"></script>
<script src="https://unpkg.com/@alaskaairux/auro-icon@latest/dist/auro-icon__bundled.js"></script>
```

### polyfills.js

The `polyfills.js` is packaged with this component, but **IT IS NOT NEEDED** to load a polyfill per component. The `polyfills.js` will work for all additional components added to the project.

### IE11 Support

**Displaimer:** While these components are supported in IE, there may be issues with loading the [web components polyfill](https://www.webcomponents.org/polyfills). Please consult their documentation when supporting IE11.


## auro-icon use cases

The `<auro-icon>` element should be used in situations where users may:

* want to use an auro icons without a lot of setup
* want to add an icon to another auro component

## API Code Examples

Primary auro-icon

```html
<auro-icon category="interface" name="chevron-up"></auro-icon>
<auro-icon category="interface" name="chevron-up" onDark></auro-icon>
```

Emphasis auro-icon

```html
<auro-icon category="interface" name="chevron-up" emphasis></auro-icon>
<auro-icon category="interface" name="chevron-up" emphasis onDark></auro-icon>
```

Accent auro-icon

```html
<auro-icon category="interface" name="chevron-up" accent></auro-icon>
<auro-icon category="interface" name="chevron-up" accent onDark></auro-icon>
```

Disabled auro-icon

```html
<auro-icon category="interface" name="chevron-up" disabled></auro-icon>
<auro-icon category="interface" name="chevron-up" disabled onDark></auro-icon>
```

## Alaska Logos

Easy keyword option for using the Alaska Airlines logo.

```html
<auro-icon alaska></auro-icon>
<auro-icon alaska onDark></auro-icon>
```

```html
<auro-icon alaskaTagline></auro-icon>
<auro-icon alaskaTagline onDark></auro-icon>
```

## Other airline logos

The auro-icon component has easy access to other than Alaska airline logos. Supported logos include

```
/logos
├── glyph-AA.svg
├── glyph-AS.svg
├── logo-7H.svg
├── logo-AA.svg
├── logo-AF.svg
├── logo-AM.svg
├── logo-AS-tagline.svg
├── logo-AS.svg
├── logo-AY.svg
├── logo-BA.svg
├── logo-CX.svg
├── logo-DE.svg
├── logo-DL.svg
├── logo-EI.svg
├── logo-EK.svg
├── logo-EV.svg
├── logo-FI.svg
├── logo-FJ.svg
├── logo-HA.svg
├── logo-HU.svg
├── logo-JL.svg
├── logo-KE.svg
├── logo-KL.svg
├── logo-LA.svg
├── logo-LH.svg
├── logo-LP.svg
├── logo-OO.svg
├── logo-QF.svg
├── logo-QX.svg
└── logo-SQ.svg
```

Example

```html
<auro-icon category="logos" name="logo-AS"></auro-icon>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open two different shell sessions. One is for the **npm tasks**, the second is to run the **server**.

**Peer dependency:** Please make sure Polymer is installed globally in order to run the Polymer server. See [Auro Component Development Details](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md) for more information.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:3001](http://localhost:3001/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-icon.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.
