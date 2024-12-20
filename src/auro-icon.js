// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable jsdoc/require-description-complete-sentence */

import { html, css } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import BaseIcon from "./baseIcon.js";
import tokensCss from "./tokens-css.js";
import styleCss from "./style-css.js";
import colorCss from "./color-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.
 *
 * @attr {String} category - The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage.
 * @attr {String} name - The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage
 * @attr {Boolean} customColor - Removes primary selector.
 * @attr {Boolean} customSvg - When true, auro-icon will render a custom SVG inside the default slot.
 * @attr {Boolean} label - Exposes content in slot as icon label.
 * @attr {Boolean} primary - DEPRECATED: Sets the icon to use the baseline primary icon style.
 * @attr {Boolean} accent - Sets the icon to use the accent style.
 * @attr {Boolean} emphasis - Sets the icon to use the emphasis style.
 * @attr {Boolean} disabled - Sets the icon to use the disabled style.
 * @attr {Boolean} error - Sets the icon to use the error style.
 * @attr {Boolean} info - Sets the icon to use the info style.
 * @attr {Boolean} secondary - Sets the icon to use the secondary style.
 * @attr {Boolean} tertiary - Sets the icon to use the tertiary style.
 * @attr {Boolean} subtle - Sets the icon to use the subtle style.
 * @attr {Boolean} success - Sets the icon to use the success style.
 * @attr {Boolean} warning - Sets the icon to use the warning style.
 * @attr {String} ariaHidden - Set aria-hidden value. Default is `true`. Option is `false`.
 * @attr {String} uri - Set the uri for CDN used when fetching icons
 * @slot - Hidden from visibility, used for a11y if icon description is needed.
 * @slot svg - Used for custom SVG content.
 */

// build the component class
export class AuroIcon extends BaseIcon {
  constructor() {
    super();

    this.uri = 'https://cdn.jsdelivr.net/npm/@alaskaairux/icons@latest/dist';

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
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      accent: {
        type: Boolean,
        reflect: true
      },
      ariaHidden: {
        type: String,
        reflect: true
      },
      category: {
        type: String,
        reflect: true
      },
      customColor: {
        type: Boolean
      },
      customSvg: {
        type: Boolean
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      emphasis: {
        type: Boolean,
        reflect: true
      },
      error: {
        type: Boolean,
        reflect: true
      },
      info: {
        type: Boolean,
        reflect: true
      },
      label: {
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
      secondary: {
        type: Boolean,
        reflect: true
      },
      subtle: {
        type: Boolean,
        reflect: true
      },
      success: {
        type: Boolean,
        reflect: true
      },
      tertiary: {
        type: Boolean,
        reflect: true
      },
      uri: {
        type: String
      },
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
   * @returns {void} Exposes CSS parts for styling from parent components.
   */
  exposeCssParts() {
    this.setAttribute('exportparts', 'svg:iconSvg');
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const a11y = {
      'labelContainer': true,
      'util_displayHiddenVisually': !this.label
    };

    const classes = {
      'label': this.label,
      'wrapper': true,
    };

    return html`
      <div
        class="${classMap(classes)}"
        title="${ifDefined(this.title || undefined)}">
        <span aria-hidden="${ifDefined(this.ariaHidden ? this.ariaHidden : true)}" part="svg">
          ${this.customSvg ? html`
              <slot name="svg"></slot>
            ` : html`
              ${this.svg}
            `
          }
        </span>

        <div class="${classMap(a11y)}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
