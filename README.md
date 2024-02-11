# auro-icon

`<auro-icon>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of displaying the [icons](https://auro.alaskaair.com/icons/usage) from the Auro Design System.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-icon/testPublish.yml?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/[namespace]-[name]/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-icon?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-icon)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-icon?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

```shell
$ npm i @aurodesignsystem/auro-icon
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
import "@aurodesignsystem/auro-icon";
```

**Reference component in HTML**

```html
<auro-icon category="alert" name="error" accent></auro-icon>
```

## CDN Use

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

### Install

Include the following example HTML code in the `<head>` element of your page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-icon@latest/dist/auro-icon__bundled.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-icon@latest/dist/auro-alaska__bundled.js" type="module"></script>
```

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

### CDN options

Both [Unpkg](https://www.unpkg.com/) and [JSDelivr](https://www.jsdelivr.com/) are free open source options that you can use. These are 3rd party resources and Auro is not responsible for their uptime. **Use at your own risk.** These bundle resources are included with the npm package, you are free to use any CDN resource that fits your needs.

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

See [auro-alaska](https://auro.alaskaair.com/components/auro/icon/alaska).

## Other airline logos

The auro-icon component has easy access to other than Alaska airline logos.

For full list, see [Icons repo](https://github.com/AlaskaAirlines/Icons/tree/master/src/icons/logos).

Example use:

```html
<auro-icon category="logos" name="tail-AS"></auro-icon>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open a shell session to run the **dev server**.

```shell
// shell terminal one
$ npm run dev
```

Open [localhost:3001](http://localhost:3001/)

If running separate sessions is preferred, please run the following commands in individual terminal shells.

```shell
$ npm run build:watch
$ npm run serve
```

### Testing
Automated tests are required for every Auro component. See `.\test\auro-icon.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.
