// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable one-var, no-console, jsdoc/require-description-complete-sentence */

import { html, css } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import BaseIcon from "./baseIcon.js";
import styleCss from "./iconStyle-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.
 *
 * @attr {Boolean} customSize - Allows for custom size use.
 * @attr {String} category - The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage.
 * @attr {String} name - The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage
 * @attr {Boolean} customColor - Removes primary selector.
 * @attr {Boolean} label - Exposes content in slot as icon label.
 * @attr {Boolean} primary - Sets the icon to use the baseline primary icon style.
 * @attr {Boolean} emphasis - Sets the icon to use the emphasis style.
 * @attr {Boolean} accent - Sets the icon to use the accent style.
 * @attr {Boolean} advisory - Sets the icon to use the advisory style.
 * @attr {Boolean} success - Sets the icon to use the success style.
 * @attr {Boolean} error - Sets the icon to use the error style.
 * @attr {Boolean} disabled - Sets the icon to use the disabled style.
 * @attr {Boolean} warning - Sets the icon to use the warning style.
 * @attr {String} ariaHidden - Set aria-hidden value. Default is `true`. Option is `false`.
 * @attr {String} uri - Set the uri for CDN used when fetching icons
 * @slot - Hidden from visibility, used for a11y if icon description is needed.
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
  /* eslint-disable max-statements */
  privateDefaults() {
    this.primary = false;
    this.label = false;
    this.emphasis = false;
    this.accent = false;
    this.disabled = false;
    this.error = false;
    this.success = false;
    this.advisory = false;
    this.warning = false;
    this.customColor = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      category: {
        type: String,
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
      label: {
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
      customColor: {
        type: Boolean
      },
      ariaHidden: {
        type: String,
        reflect: true
      },
      uri: {
        type: String
      }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`${styleCss}`
    ];
  }

  /**
   * If component is registered as a custom name,
   * this function will add an attribute to the element
   * with the default name. This is so that other parent
   * components can still this the element.
   * @private
   * @param {string} name - The default tag name.
   * @param {HTMLElement} elem - The element to add the attribute to.
   * @returns {void}
   */
  handleCustomTagName(name, elem) {
    if (name.toLowerCase() !== elem.tagName.toLowerCase()) {
      elem.setAttribute(name, true);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleCustomTagName('auro-icon', this);
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'primary': true && !this.alaska && !this.alaskaTagline && !this.customColor,
      'emphasis': this.emphasis,
      'accent': this.accent,
      'disabled': this.disabled,
      'error': this.error,
      'success': this.success,
      'advisory': this.advisory,
      'warning': this.warning,
      'label': this.label
    };

    const a11y = {
      'labelContainer': true,
      'util_displayHiddenVisually': !this.label
    };

    return html`
      <div
        class="${classMap(classes)}"
        title="${ifDefined(this.title ? this.title : undefined)}"
        >

        <span aria-hidden="${ifDefined(this.ariaHidden ? this.ariaHidden : true)}" part="svg">
          ${this.svg}
        </span>

        <div class="${classMap(a11y)}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-icon")) {
  customElements.define("auro-icon", AuroIcon);
}
