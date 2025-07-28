// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { css } from "lit";
import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement.mjs';
import error from '@alaskaairux/icons/dist/icons/alert/error.mjs';
import cacheFetch from './cacheFetch.js';
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @slot - Hidden from visibility, used for a11y if icon description is needed
 */

// build the component class
export default class BaseIcon extends AuroElement {
  constructor() {
    super();
    this.onDark = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,

      /**
       * Set value for on-dark version of auro-icon.
       */
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
      }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * Async function to fetch requested icon from npm CDN.
   * @private
   * @param {string} category - Icon category.
   * @param {string} name - Icon name.
   * @returns {SVGElement} DOM - Ready HTML to be appended.
   */
  async fetchIcon(category, name) {
    let iconHTML = '';

    if (category === 'logos') {
      iconHTML = await cacheFetch(`${this.uri}/${category}/${name}.svg`);
    } else {
      iconHTML = await cacheFetch(`${this.uri}/icons/${category}/${name}.svg`);
    }

    const dom = new DOMParser().parseFromString(iconHTML, 'text/html');

    return dom.body.querySelector('svg');
  }

  // lifecycle function
  async firstUpdated() {
    try {
      if (!this.customSvg) {
        const svg = await this.fetchIcon(this.category, this.name);

        if (svg) {
          this.svg = svg;
        } else if (!svg) {
          const penDOM = new DOMParser().parseFromString(error.svg, 'text/html');

          this.svg = penDOM.body.firstChild;
        }
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      this.svg = undefined;
    }
  }
}
