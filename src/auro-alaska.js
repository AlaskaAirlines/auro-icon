/* eslint-disable one-var */
// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import BaseIcon from "./baseIcon";

import as400 from '@alaskaairux/icons/dist/restricted/AS-400_es6.js';
import as300 from '@alaskaairux/icons/dist/restricted/AS-300_es6.js';
import as200 from '@alaskaairux/icons/dist/restricted/AS-200_es6.js';
import as100 from '@alaskaairux/icons/dist/restricted/AS-100_es6.js';
import asTag400 from '@alaskaairux/icons/dist/restricted/AS-tagline-400_es6.js';
import asTag300 from '@alaskaairux/icons/dist/restricted/AS-tagline-300_es6.js';
import asTag200 from '@alaskaairux/icons/dist/restricted/AS-tagline-200_es6.js';
import asTag100 from '@alaskaairux/icons/dist/restricted/AS-tagline-100_es6.js';

// Import touch detection lib
// import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./alaskaStyle-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-alaska provides users a way to use the Auro Icons by simply passing in the category and name.
 *
 * @attr {Boolean} alaska - Set value for default alaska airlines logo
 * @attr {Boolean} alaskaOfficial - Set value for alaska airlines logo with official tagline
 * @slot - Hidden from visibility, used for a11y if icon description is needed
 */

// build the component class
class AuroAlaska extends BaseIcon {
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
      alaska: {
        type: Boolean,
        reflect: true
      },
      alaskaOfficial: {
        type: Boolean,
        reflect: true
      },
    };
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
    switch (this.alaskaOfficial) {

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

  // lifecycle function for the purpose of
  // displaying the correct Alaska logo
  // with the correct Restricted icon
  async firstUpdated() {
    const iconContainer = await this.shadowRoot.querySelectorAll('.icon');
    const iconWidth = iconContainer[this.zero].clientWidth;

    if (this.alaskaOfficial) {
      this.alaska = false;
    } else {
      this.alaska = true;
    }

    if (this.alaska) {
      this.alaskaLogoDef(iconWidth);
    } else if (this.alaskaOfficial) {
      this.alaskaLogoTagDef(iconWidth);
    }
  }

  static get styles() {
    return [
      super.styles,
      css`${styleCss}`
    ];
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'icon': true,
      'logo': this.alaska || this.alaskaOfficial,
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
if (!customElements.get("auro-alaska")) {
  customElements.define("auro-alaska", AuroAlaska);
}
