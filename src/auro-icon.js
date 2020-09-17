// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import AuroElement from '@alaskaairux/orion-web-core-style-sheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.
 *
 * @attr {String} category - The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage.
 * @attr {String} name - The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage.
 * @attr {Boolean} emphasis - Sets the icon to use the emphasis style.
 * @attr {Boolean} accent - Sets the icon to use the accent style.
 * @attr {Boolean} disabled - Sets the icon to use the disabled style.
 */

// build the component class
class AuroIcon extends AuroElement {
  // constructor() {
  //   super();
  // }

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
      onDark: {
        type: Boolean,
        reflect: true
      },
      svg: {
        attribute: false
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    const url = this.category && this.name ? `../node_modules/@alaskaairux/icons/dist/icons/${this.category}/${this.name}_es6.js` : undefined;

    if (url) {
      import(url)
        .then((svgIcon) => {
          const dom = new DOMParser().parseFromString(svgIcon.default.svg, 'text/html');
          this.svg = dom.body.firstChild;
        })
        .catch((err) => {
          import('../node_modules/@alaskaairux/icons/dist/icons/interface/penguin_es6.js')
            .then((svgIcon) => {
              const dom = new DOMParser().parseFromString(svgIcon.default.svg, 'text/html');
              this.svg = dom.body.firstChild;
            });
        });
    } else {
      import('../node_modules/@alaskaairux/icons/dist/icons/interface/penguin_es6.js')
        .then((svgIcon) => {
          const dom = new DOMParser().parseFromString(svgIcon.default.svg, 'text/html');
          this.svg = dom.body.firstChild;
        });
    }
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'primary': !this.emphasis && !this.accent && !this.disabled,
      'emphasis': this.emphasis && !this.accent && !this.disabled,
      'accent': this.accent && !this.emphasis && !this.disabled,
      'disabled': this.disabled && !this.emphasis && !this.accent
    }

    return html`
      <div class="${classMap(classes)}" aria-hidden="${this.hideAudible(this.hiddenAudible)}">
        ${this.svg}
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-icon")) {
  customElements.define("auro-icon", AuroIcon);
}
