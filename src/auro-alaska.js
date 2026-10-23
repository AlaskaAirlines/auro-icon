// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable jsdoc/require-description-complete-sentence */

import as100 from "@alaskaairux/icons/dist/restricted/AS-100.mjs";
import as200 from "@alaskaairux/icons/dist/restricted/AS-200.mjs";
import as300 from "@alaskaairux/icons/dist/restricted/AS-300.mjs";

import as400 from "@alaskaairux/icons/dist/restricted/AS-400.mjs";
import official100 from "@alaskaairux/icons/dist/restricted/AS-tagline-100.mjs";
import official200 from "@alaskaairux/icons/dist/restricted/AS-tagline-200.mjs";
import official300 from "@alaskaairux/icons/dist/restricted/AS-tagline-300.mjs";
import official400 from "@alaskaairux/icons/dist/restricted/AS-tagline-400.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import BaseIcon from "./baseIcon.js";
// Import touch detection lib
import styleCss from "./styles/alaskaStyle.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
// build the component class
/**
 * Shows the Alaska Airlines logo, with or without the official tagline.
 *
 * **Key capabilities**
 * - **Fills its container**: the logo stretches to the width of its container, and the
 *   artwork best suited to that width is picked when the element first renders.
 * - **Official tagline**: `official` switches to the logo with the tagline.
 * - **Light and dark backgrounds**: `appearance="inverse"` shows the logo in white for dark
 *   backgrounds.
 *
 * **Example**
 * ```html
 * <auro-alaska></auro-alaska>
 * ```
 *
 * @summary Alaska Airlines logo that fills its container, with an optional official tagline.
 * @customElement auro-alaska
 *
 * @slot - Extra text read by screen readers along with the logo's built-in name, which already reads "Alaska Airlines Logo image for Alaska Airlines". Leave it empty unless the logo needs more context. It isn't shown on screen. {@category a11y}
 * @cssprop {Color} --ds-auro-alaska-color - Color of the logo.
 */
export class AuroAlaska extends BaseIcon {
  constructor() {
    super();

    this._initializeDefaults();
  }

  /**
   * Sets the element's default values.
   * @private
   * @returns {void}
   */
  _initializeDefaults() {
    super._initializeDefaults();
    this.uri = "https://cdn.jsdelivr.net/npm/@alaskaairux/icons@latest/dist";
    this.sm = 107;
    this.md = 191;
    this.lg = 527;
    this.alaska = true;
    this.official = false;
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...BaseIcon.properties,

      /**
       * @private
       */
      alaska: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Shows the Alaska Airlines logo with the official tagline.
       * @default false
       * @category ui
       */
      official: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  /**
   * Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-alaska` on the same page.
   * @param {string} [name="auro-alaska"] - The tag name to register the element under.
   *
   * @example
   * AuroAlaska.register("custom-alaska") // makes the element available as <custom-alaska>
   *
   */
  static register(name = "auro-alaska") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroAlaska);
  }

  /**
   * Picks the logo artwork that best fits the given width.
   * @private
   * @param {number} iconWidth - The width of the logo's wrapper element, in pixels.
   * @returns {void}
   */
  alaskaLogoDef(iconWidth) {
    if (this.alaska) {
      if (iconWidth <= this.sm) {
        this.svg = new DOMParser().parseFromString(
          as100.svg,
          "text/html",
        ).body.firstChild;
      } else if (iconWidth > this.sm && iconWidth <= this.md) {
        this.svg = new DOMParser().parseFromString(
          as200.svg,
          "text/html",
        ).body.firstChild;
      } else if (iconWidth > this.md && iconWidth <= this.lg) {
        this.svg = new DOMParser().parseFromString(
          as300.svg,
          "text/html",
        ).body.firstChild;
      } else {
        this.svg = new DOMParser().parseFromString(
          as400.svg,
          "text/html",
        ).body.firstChild;
      }
    }
  }

  /**
   * Picks the logo artwork that best fits the given width.
   * @private
   * @param {number} iconWidth - The width of the logo's wrapper element, in pixels.
   * @returns {void}
   */
  alaskaOfficialDef(iconWidth) {
    if (this.official) {
      if (iconWidth <= this.sm) {
        this.svg = new DOMParser().parseFromString(
          official100.svg,
          "text/html",
        ).body.firstChild;
      } else if (iconWidth > this.sm && iconWidth <= this.md) {
        this.svg = new DOMParser().parseFromString(
          official200.svg,
          "text/html",
        ).body.firstChild;
      } else if (iconWidth > this.md && iconWidth <= this.lg) {
        this.svg = new DOMParser().parseFromString(
          official300.svg,
          "text/html",
        ).body.firstChild;
      } else {
        this.svg = new DOMParser().parseFromString(
          official400.svg,
          "text/html",
        ).body.firstChild;
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();

    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-alaska");
  }

  // lifecycle function for the purpose of
  // displaying the correct Alaska logo
  // with the correct Restricted icon
  firstUpdated() {
    const iconContainer = this.shadowRoot.querySelector(".icon");
    const iconWidth = iconContainer.clientWidth;

    if (this.official) {
      this.alaska = false;
    }

    try {
      if (this.alaska) {
        this.alaskaLogoDef(iconWidth);
      } else if (this.official) {
        this.alaskaOfficialDef(iconWidth);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (_err) {
      this.svg = undefined;
    }
  }

  static get styles() {
    return [BaseIcon.styles, tokensCss, styleCss];
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      icon: true,
      logo: this.alaska || this.official,
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
