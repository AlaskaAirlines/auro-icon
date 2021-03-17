/* eslint-disable one-var */
/* eslint-disable no-console */
// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import BaseIcon from "./baseIcon";
import styleCss from "./iconStyle-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.
 *
 * @attr {Boolean} customSize - Allows for custom size use
 * @attr {String} category - The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage
 * @attr {String} name - The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage
 * @attr {Boolean} customColor - Removes primary selector
 * @attr {Boolean} label - Exposes content in slot as icon label
 * @attr {Boolean} primary - Sets the icon to use the baseline primary icon style
 * @attr {Boolean} emphasis - Sets the icon to use the emphasis style
 * @attr {Boolean} accent - Sets the icon to use the accent style
 * @attr {Boolean} advisory - Sets the icon to use the advisory style
 * @attr {Boolean} success - Sets the icon to use the success style
 * @attr {Boolean} error - Sets the icon to use the error style
 * @attr {Boolean} disabled - Sets the icon to use the disabled style
 * @attr {Boolean} warning - Sets the icon to use the warning style
 * @slot - Hidden from visibility, used for a11y if icon description is needed
 */

// build the component class
class AuroIcon extends BaseIcon {
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
      }
    };
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
      'primary': true && !this.alaska && !this.alaskaTagline && !this.customColor,
      'emphasis': this.emphasis,
      'accent': this.accent,
      'disabled': this.disabled,
      'error': this.error,
      'success': this.success,
      'advisory': this.advisory,
      'warning': this.warning,
      'label': this.label
    }

    const a11y = {
      'util_displayHiddenVisually': !this.label
    }

    return html`
      <div class="${classMap(classes)}">
        ${this.svg}
        <div class="${classMap(a11y)}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-icon")) {
  customElements.define("auro-icon", AuroIcon);
}
