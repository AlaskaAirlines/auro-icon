// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import errorStroke from "@alaskaairux/icons/dist/icons/alert/error-stroke.mjs";
import tailDefault from "@alaskaairux/icons/dist/logos/tail-DEFAULT_es6.js";
import AuroElement from "@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement.mjs";
import cacheFetch from "./cacheFetch.js";
import styleCss from "./styles/style.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Shared base class for `auro-icon` and `auro-alaska`. It has no tag name of its own.
 */
export default class BaseIcon extends AuroElement {
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
    this.onDark = false;
    this.appearance = "default";
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...AuroElement.properties,

      /**
       * Deprecated: Use `appearance="inverse"` instead.
       * Switches the component's default colors to versions designed for dark backgrounds.
       * @deprecated Use `appearance="inverse"` instead.
       * @category ui
       */
      onDark: {
        type: Boolean,
        attribute: "ondark",
        reflect: true,
      },

      /**
       * Sets the component's colors for the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones.
       * @type {"default" | "inverse"}
       * @default "default"
       * @category ui
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * @private
       */
      svg: {
        attribute: false,
      },
    };
  }

  static get styles() {
    return styleCss;
  }

  /**
   * Fetches the requested icon's SVG from the npm CDN.
   * @private
   * @param {string} category - The icon's category, such as `interface`.
   * @param {string} name - The icon's file name, without the extension.
   * @returns {Promise<SVGElement|null>} The icon's `<svg>` element, or null if the response doesn't contain one.
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
    await this.loadIcon();
  }

  /**
   * Loads the icon set by `category` and `name`, or a fallback icon if it isn't found. It keeps only the latest call's result, so a slow earlier request can't replace a newer icon.
   * @private
   * @returns {Promise<void>}
   */
  async loadIcon() {
    this._loadId = (this._loadId || 0) + 1;
    const loadId = this._loadId;

    if (this.customSvg) {
      return;
    }

    let svg;

    try {
      // Without both a category and a name there's nothing to request, so go straight to the fallback.
      if (this.category && this.name) {
        svg = await this.fetchIcon(this.category, this.name);
      }

      if (!svg) {
        const fallbackSvg = this.name?.startsWith("tail-")
          ? tailDefault.svg
          : errorStroke.svg;

        svg = new DOMParser()
          .parseFromString(fallbackSvg, "text/html")
          .body.querySelector("svg");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (_err) {
      svg = undefined;
    }

    if (loadId !== this._loadId) {
      return;
    }

    this._sourceSvg = svg;
    this.svg = svg ? this.prepareSvg(svg) : undefined;
  }

  /**
   * Returns the SVG to show for a loaded icon. Subclasses override it to adjust the icon's accessibility markup.
   * @private
   * @param {SVGElement} svg - The icon's `<svg>` element, as loaded.
   * @returns {SVGElement} The `<svg>` element to show.
   */
  prepareSvg(svg) {
    return svg;
  }
}
