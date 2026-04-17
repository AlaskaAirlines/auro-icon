// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import error from "@alaskaairux/icons/dist/icons/alert/error.mjs";
import tailDefault from "@alaskaairux/icons/dist/logos/tail-DEFAULT_es6.js";
import AuroElement from "@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement.mjs";
import cacheFetch from "./cacheFetch.js";
import styleCss from "./styles/style.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @slot - Hidden from visibility, used for a11y if icon description is needed
 */
export default class BaseIcon extends AuroElement {
  constructor() {
    super();
    
    this._initializeDefaults();
  }

  /**
   * Internal defaults.
   * @private
   * @returns {void}
   */
  _initializeDefaults() {
    this.onDark = false;
    this.appearance = "default";
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...AuroElement.properties,

      /**
       * DEPRECATED - use `appearance="inverse"` instead.
       */
      onDark: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Defines whether the button will be on lighter or darker backgrounds.
       * @property {'default' | 'inverse'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true
      },

      /**
       * @private
       */
      svg: {
        attribute: false,
        reflect: true,
      },
    };
  }

  static get styles() {
    return styleCss;
  }

  /**
   * Async function to fetch requested icon from npm CDN.
   * @private
   * @param {string} category - Icon category.
   * @param {string} name - Icon name.
   * @returns {SVGElement} DOM - Ready HTML to be appended.
   */
  async fetchIcon(category, name) {
    let iconHTML = "";

    if (category === "logos") {
      iconHTML = await cacheFetch(`${this.uri}/${category}/${name}.svg`);
    } else {
      iconHTML = await cacheFetch(`${this.uri}/icons/${category}/${name}.svg`);
    }

    const dom = new DOMParser().parseFromString(iconHTML, "text/html");

    return dom.body.querySelector("svg");
  }

  // lifecycle function
  async firstUpdated() {
    try {
      if (!this.customSvg) {
        const svg = await this.fetchIcon(this.category, this.name);

        if (svg) {
          this.svg = svg;
        } else if (!svg) {
          const fallbackSvg = this.name?.startsWith('tail-') ? tailDefault.svg : error.svg;

          this.svg = new DOMParser().parseFromString(fallbackSvg, "text/html").body.querySelector("svg");
        }
      }
      // eslint-disable-next-line no-unused-vars
    } catch (_err) {
      this.svg = undefined;
    }
  }
}
