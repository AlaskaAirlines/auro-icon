/* eslint-disable one-var */
// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import AuroElement from '@alaskaairux/orion-web-core-style-sheets/dist/auroElement/auroElement';
import penguin from '@alaskaairux/icons/dist/icons/interface/penguin_es6.js';
import alaska from '@alaskaairux/icons/dist/restricted/AS_es6.js';
import alaskaTagline from '@alaskaairux/icons/dist/restricted/AS-tagline_es6.js';
import cacheFetch from './cacheFetch';

import as400 from '@alaskaairux/icons/dist/restricted/AS-400_es6.js';
import as300 from '@alaskaairux/icons/dist/restricted/AS-300_es6.js';
import as200 from '@alaskaairux/icons/dist/restricted/AS-200_es6.js';
import as100 from '@alaskaairux/icons/dist/restricted/AS-100_es6.js';
import asTag400 from '@alaskaairux/icons/dist/restricted/AS-tagline-400_es6.js';
import asTag300 from '@alaskaairux/icons/dist/restricted/AS-tagline-300_es6.js';
import asTag200 from '@alaskaairux/icons/dist/restricted/AS-tagline-200_es6.js';
import asTag100 from '@alaskaairux/icons/dist/restricted/AS-tagline-100_es6.js';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.
 *
 * @attr {String} category - The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage.
 * @attr {String} name - The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage.
 * @attr {Boolean} primary - Sets the icon to use the baseline primary icon style.
 * @attr {Boolean} emphasis - Sets the icon to use the emphasis style.
 * @attr {Boolean} accent - Sets the icon to use the accent style.
 * @attr {Boolean} advisory - Sets the icon to use the advisory style.
 * @attr {Boolean} success - Sets the icon to use the success style.
 * @attr {Boolean} error - Sets the icon to use the error style.
 * @attr {Boolean} disabled - Sets the icon to use the disabled style.
 * @attr {Boolean} warning - Sets the icon to use the warning style.
 * @attr {Boolean} onDark - Set value for on-dark version of auro-icon.
 * @attr {Boolean} customColor - Removes primary selector.
 * @attr {Boolean} customSize - Allows for custom size use.
 * @attr {Boolean} alaska - Set value for default alaska airlines logo.
 * @attr {Boolean} alaskaTagline - Set value for alaska airlines logo with tagline.
 * @slot - Hidden from visibility, used for a11y if icon description is needed
 */

// build the component class
class AuroIcon extends AuroElement {
  constructor() {
    super();

    this.privateDefaults();
  }

  /**
   * @private internal defaults
   * @returns {void}
   */
  privateDefaults() {
    this.uri = 'https://unpkg.com/@alaskaairux/icons@latest/dist';
    this.zero = 0;
    this.no = 1;
    this.sm = 107;
    this.md = 191;
    this.lg = 527;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      category: {
        type: String,
        reflect: true
      },
      alaska: {
        type: Boolean,
        reflect: true
      },
      alaskaTagline: {
        type: Boolean,
        reflect: true
      },
      name: {
        type: String,
        reflect: true
      },
      primary: {
        type: Boolean,
        reflect: true
      },
      emphasis: {
        type: Boolean,
        reflect: true
      },
      accent: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      error: {
        type: Boolean,
        reflect: true
      },
      success: {
        type: Boolean,
        reflect: true
      },
      advisory: {
        type: Boolean,
        reflect: true
      },
      warning: {
        type: Boolean,
        reflect: true
      },
      onDark: {
        type: Boolean,
        reflect: true
      },

      /**
       * @private
       */
      svg: {
        attribute: false,
        reflect: true
      },
      customColor: {
        type: Boolean
      }
    };
  }

  /**
   * @private async function to fetch requested icon from npm CDN
   * @param {string} category icon category
   * @param {string} name icon name
   * @returns {dom} DOM ready HTML to be appended
   */
  async fetchIcon(category, name) {
    let iconHTML = '';

    if (category === 'logos') {
      iconHTML = await cacheFetch(`${this.uri}/${category}/${name}.svg`);
    } else if (this.alaska) {
      iconHTML = alaska.svg;
    } else if (this.alaskaTagline) {
      iconHTML = alaskaTagline.svg;
    } else {
      iconHTML = await cacheFetch(`${this.uri}/icons/${category}/${name}.svg`);
    }

    const dom = new DOMParser().parseFromString(iconHTML, 'text/html');

    return dom.body.querySelector('svg');
  }

  /**
   * @private async function to decide which logo to use
   * @param {number} iconWidth size of parent icon is in
   * @returns {object} SVG to be appended to DOM
   */
  alaskaLogoDef(iconWidth) {
    switch (this.alaska) {

      case iconWidth <= this.sm:
        this.svg = new DOMParser().parseFromString(as100.svg, 'text/html').body.firstChild;
        break;
      case iconWidth >= this.sm + this.no && iconWidth <= this.md:
        this.svg = new DOMParser().parseFromString(as200.svg, 'text/html').body.firstChild;
        break;
      case iconWidth >= this.md + this.no && iconWidth <= this.lg:
        this.svg = new DOMParser().parseFromString(as300.svg, 'text/html').body.firstChild;
        break;
      default:
        this.svg = new DOMParser().parseFromString(as400.svg, 'text/html').body.firstChild;
    }
  }

  /**
   * @private async function to decide which logo to use
   * @param {number} iconWidth size of parent icon is in
   * @returns {object} SVG to be appended to DOM
   */
  alaskaLogoTagDef(iconWidth) {
    switch (this.alaskaTagline) {

      case iconWidth <= this.sm:
        this.svg = new DOMParser().parseFromString(asTag100.svg, 'text/html').body.firstChild;
        break;
      case iconWidth >= this.sm + this.no && iconWidth <= this.md:
        this.svg = new DOMParser().parseFromString(asTag200.svg, 'text/html').body.firstChild;
        break;
      case iconWidth >= this.md + this.no && iconWidth <= this.lg:
        this.svg = new DOMParser().parseFromString(asTag300.svg, 'text/html').body.firstChild;
        break;
      default:
        this.svg = new DOMParser().parseFromString(asTag400.svg, 'text/html').body.firstChild;
    }
  }

  // lifecycle function
  async firstUpdated() {
    const svg = await this.fetchIcon(this.category, this.name);

    if (svg) {
      this.svg = svg;
    } else if (!svg) {
      const penDOM = new DOMParser().parseFromString(penguin.svg, 'text/html');

      this.svg = penDOM.body.firstChild;
    }

    // The following code is for the purpose of
    // displaying the correct Alaska logo
    // with the correct Restricted icon
    const iconContainer = await this.shadowRoot.querySelectorAll('.icon');
    const iconWidth = iconContainer[this.zero].clientWidth;

    if (this.alaska) {
      this.alaskaLogoDef(iconWidth);
    } else if (this.alaskaTagline) {
      this.alaskaLogoTagDef(iconWidth);
    }
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'icon': true,
      'primary': true && !this.alaska && !this.alaskaTagline && !this.customColor,
      'emphasis': this.emphasis,
      'accent': this.accent,
      'disabled': this.disabled,
      'error': this.error,
      'success': this.success,
      'advisory': this.advisory,
      'warning': this.warning,
      'logo': this.alaska || this.alaskaTagline,
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="util_displayHiddenVisually">
          <slot></slot>
        </div>
        <slot name="icon">${this.svg}</slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-icon")) {
  customElements.define("auro-icon", AuroIcon);
}
