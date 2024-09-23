// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable jsdoc/require-description-complete-sentence */

import { html, css } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import BaseIcon from "./baseIcon.js";

import as400 from '@alaskaairux/icons/dist/restricted/AS-400.mjs';
import as300 from '@alaskaairux/icons/dist/restricted/AS-300.mjs';
import as200 from '@alaskaairux/icons/dist/restricted/AS-200.mjs';
import as100 from '@alaskaairux/icons/dist/restricted/AS-100.mjs';
import official400 from '@alaskaairux/icons/dist/restricted/AS-tagline-400.mjs';
import official300 from '@alaskaairux/icons/dist/restricted/AS-tagline-300.mjs';
import official200 from '@alaskaairux/icons/dist/restricted/AS-tagline-200.mjs';
import official100 from '@alaskaairux/icons/dist/restricted/AS-tagline-100.mjs';

// Import touch detection lib
import styleCss from "./alaskaStyle-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-alaska provides users a way to use the Alaska Airline logos.
 *
 * @attr {Boolean} official - Set value for alaska airlines logo with official tagline
 * @slot - Hidden from visibility, used for a11y if icon description is needed
 */

// build the component class
class AuroAlaska extends BaseIcon {
  constructor() {
    super();

    this.privateDefaults();
  }

  /**
   * Internal defaults.
   * @private
   * @returns {void}
   */
  privateDefaults() {
    this.uri = 'https://cdn.jsdelivr.net/npm/@alaskaairux/icons@latest/dist';
    this.sm = 107;
    this.md = 191;
    this.lg = 527;
    this.alaska = true;
    this.official = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,

      /**
       * @private
       */
      alaska: {
        type: Boolean,
        reflect: true
      },
      official: {
        type: Boolean,
        reflect: true
      },
    };
  }

  /**
   * Async function to decide which logo to use.
   * @private
   * @param {number} iconWidth - Size of parent icon is in.
   * @returns {void}
   */
  alaskaLogoDef(iconWidth) {
    if (this.alaska) {
      if (iconWidth <= this.sm) {
        this.svg = new DOMParser().parseFromString(as100.svg, 'text/html').body.firstChild;
      } else if (iconWidth > this.sm && iconWidth <= this.md) {
        this.svg = new DOMParser().parseFromString(as200.svg, 'text/html').body.firstChild;
      } else if (iconWidth > this.md && iconWidth <= this.lg) {
        this.svg = new DOMParser().parseFromString(as300.svg, 'text/html').body.firstChild;
      } else {
        this.svg = new DOMParser().parseFromString(as400.svg, 'text/html').body.firstChild;
      }
    }
  }

  /**
   * Async function to decide which logo to use.
   * @private
   * @param {number} iconWidth - Size of parent icon is in.
   * @returns {void}
   */
  alaskaOfficialDef(iconWidth) {
    if (this.official) {
      if (iconWidth <= this.sm) {
        this.svg = new DOMParser().parseFromString(official100.svg, 'text/html').body.firstChild;
      } else if (iconWidth > this.sm && iconWidth <= this.md) {
        this.svg = new DOMParser().parseFromString(official200.svg, 'text/html').body.firstChild;
      } else if (iconWidth > this.md && iconWidth <= this.lg) {
        this.svg = new DOMParser().parseFromString(official300.svg, 'text/html').body.firstChild;
      } else {
        this.svg = new DOMParser().parseFromString(official400.svg, 'text/html').body.firstChild;
      }
    }
  }

  // lifecycle function for the purpose of
  // displaying the correct Alaska logo
  // with the correct Restricted icon
  firstUpdated() {
    const iconContainer = this.shadowRoot.querySelector('.icon');
    const iconWidth = iconContainer.clientWidth;

    if (this.official) {
      this.alaska = false;
    }

    if (this.alaska) {
      this.alaskaLogoDef(iconWidth);
    } else if (this.official) {
      this.alaskaOfficialDef(iconWidth);
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
      'logo': this.alaska || this.official,
    };

    return html`
      <div class="${classMap(classes)}">
        <div class="util_displayHiddenVisually">
          <slot></slot>
        </div>
        ${this.svg}
      </div>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-alaska")) {
  customElements.define("auro-alaska", AuroAlaska);
}
