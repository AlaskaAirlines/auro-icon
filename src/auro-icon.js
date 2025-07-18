// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
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

    this.variant = undefined;
    this.privateDefaults();
  }

  /**
   * Internal Defaults.
   * @private
   * @returns {void}
   */
  privateDefaults() {
    this.uri = 'https://cdn.jsdelivr.net/npm/@alaskaairux/icons@latest/dist';
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,

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
        type: Boolean,
        reflect: true
      },

      /**
       * When true, auro-icon will render a custom SVG inside the default slot.
       */
      customSvg: {
        type: Boolean
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
       * The style of the icon. The accepted variants are `accent1`, `disabled`, `muted`, `statusDefault`, `statusInfo`, `statusSuccess`, `statusWarning`, `statusError`, `statusInfoSubtle`, `statusSuccessSubtle`, `statusWarningSubtle`, `statusErrorSubtle`, `fareBasicEconomy`, `fareBusiness`, `fareEconomy`, `fareFirst`, `farePremiumEconomy`, `tierOneWorldEmerald`, `tierOneWorldSapphire`, `tierOneWorldRuby`.
       */
      variant: {
        type: String,
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

    /**
     * icons provide a description for screen readers. Icon only instances Auro-button
     * depend on this description to provide context for the user using a screen reader.
     * Removes the SVG description for screen reader if ariaHidden is set to true.
     */
    if (this.hasAttribute('ariaHidden') && this.svg) {
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
