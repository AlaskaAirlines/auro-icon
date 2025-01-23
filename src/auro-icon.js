// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, css } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import BaseIcon from "./baseIcon.js";
import tokensCss from "./tokens-css.js";
import styleCss from "./style-css.js";
import colorCss from "./color-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

export class AuroIcon extends BaseIcon {
  constructor() {
    super();

    this.privateDefaults();
  }

  /**
   * Internal Defaults.
   * @private
   * @returns {void}
   */
  privateDefaults() {
    this.accent = false;
    this.customColor = false;
    this.customSvg = false;
    this.disabled = false;
    this.emphasis = false;
    this.error = false;
    this.info = false;
    this.label = false;
    this.primary = false;
    this.secondary = false;
    this.subtle = false;
    this.success = false;
    this.tertiary = false;
    this.warning = false;
    this.uri = 'https://cdn.jsdelivr.net/npm/@alaskaairux/icons@latest/dist';
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,

      /**
       * Sets the icon to use the accent style.
       */
      accent: {
        type: Boolean,
        reflect: true
      },

      /**
       * Set aria-hidden value. Default is `true`. Option is `false`.
       */
      ariaHidden: {
        type: String,
        reflect: true
      },

      /**
       * The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage.
       */
      category: {
        type: String,
        reflect: true
      },

      /**
       * Allows custom color to be set.
       */
      customColor: {
        type: Boolean
      },

      /**
       * When true, auro-icon will render a custom SVG inside the default slot.
       */
      customSvg: {
        type: Boolean
      },

      /**
       * Sets the icon to use the disabled style.
       */
      disabled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the icon to use the emphasis style.
       */
      emphasis: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the icon to use the error style.
       */
      error: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the icon to use the info style.
       */
      info: {
        type: Boolean,
        reflect: true
      },

      /**
       * Exposes content in slot as icon label.
       */
      label: {
        type: Boolean,
        reflect: true
      },

      /**
       * The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage.
       */
      name: {
        type: String,
        reflect: true
      },

      /**
       * DEPRECATED: Sets the icon to use the baseline primary icon style.
       */
      primary: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the icon to use the secondary style.
       */
      secondary: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the icon to use the subtle style.
       */
      subtle: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the icon to use the success style.
       */
      success: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the icon to use the tertiary style.
       */
      tertiary: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the icon to use the warning style.
       */
      warning: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`${tokensCss}`,
      css`${styleCss}`,
      css`${colorCss}`
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-icon"] - The name of element that you want to register to.
   *
   * @example
   * AuroIcon.register("custom-icon") // this will register this element to <custom-icon/>
   *
   */
  static register(name = "auro-icon") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroIcon);
  }

  connectedCallback() {
    super.connectedCallback();

    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-icon');
  }

  /**
   * @private
   * @returns {void} Exposes CSS parts for styling from parent components.
   */
  exposeCssParts() {
    this.setAttribute('exportparts', 'svg:iconSvg');
  }

  async firstUpdated() {
    await super.firstUpdated();

    // Removes the SVG description for screenreader if ariaHidden is set to true
    if (!this.hasAttribute('ariaHidden')) {
      const svgDesc = this.svg.querySelector('desc');

      if (svgDesc) {
        svgDesc.remove();
        this.svg.removeAttribute('aria-labelledby');
      }
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const labelClasses = {
      'labelWrapper': true,
      'util_displayHiddenVisually': !this.label
    };

    const svgClasses = {
      'svgWrapper': true,
    };

    return html`
      <div class="componentWrapper">
        <div
          class="${classMap(svgClasses)}"
          title="${ifDefined(this.title || undefined)}">
          <span aria-hidden="${ifDefined(this.ariaHidden || true)}" part="svg">
            ${this.customSvg ? html`
                <slot name="svg"></slot>
              ` : html`
                ${this.svg}
              `
            }
          </span>
        </div>

        <div class="${classMap(labelClasses)}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
