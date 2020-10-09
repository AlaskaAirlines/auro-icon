/* eslint-disable one-var */
// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import AuroElement from '@alaskaairux/orion-web-core-style-sheets/dist/auroElement/auroElement';
import penguin from '@alaskaairux/icons/dist/icons/interface/penguin_es6.js';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.
 *
 * @attr {String} category - The category of the icon you are looking for. See https://auro.alaskaair.com/icons/usage.
 * @attr {String} name - The name of the icon you are looking for without the file extension. See https://auro.alaskaair.com/icons/usage.
 * @attr {Boolean} alaska - Displays the Alaska Airlines logo icon. Only supports the onDark style attribute.
 * @attr {Boolean} primary - Sets the icon to use the baseline primary icon style.
 * @attr {Boolean} emphasis - Sets the icon to use the emphasis style.
 * @attr {Boolean} accent - Sets the icon to use the accent style.
 * @attr {Boolean} disabled - Sets the icon to use the disabled style.
 * @attr {Boolean} onDark - Set value for on-dark version of auro-icon.
 * @attr svg - Internal property to store the svg.
 * @slot - Hidden from visibility, used for a11y if icon description is needed
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
      alaska: {
        type: Boolean,
        reflect: true
      },
      primary: {
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
      onDark: {
        type: Boolean,
        reflect: true
      },
      svg: {
        attribute: false
      }
    };
  }

  /**
   * @private async function to fetch requested icon from npm CDN
   * @param {string} category icon category
   * @param {string} name icon name
   * @returns {dom} DOM ready HTML to be appended
   */
  async fetchIcon(category, name) {
    const icon = await fetch(`https://unpkg.com/@alaskaairux/icons@3.4.0/dist/icons/${category}/${name}.svg`);
    const iconHTML = await icon.text();
    const dom = new DOMParser().parseFromString(iconHTML, 'text/html');

    return dom.body.querySelector('svg');
  }

  async firstUpdated() {
    if (this.alaska) {
      this.svg = this.getAlaskaLogo();
    } else {
      const svg = await this.fetchIcon(this.category, this.name);

      if (svg) {
        this.svg = svg;
      } else {
        const penDOM = new DOMParser().parseFromString(penguin.svg, 'text/html');

        this.svg = penDOM.body.firstChild;
      }
    }
  }

  /**
   * @private  function to fetch the Alaska Logo icon
   * @returns {dom} DOM ready HTML to be appended
   */
  getAlaskaLogo() {
    return html`
      <svg viewbox="0 0 300 90" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <g id="layer1" transform="translate(-312.93684,-555.14853)">
          <path
            d="m 460.55937,559.20993 -34.2409,57.49725 c -3.56998,5.91278 -5.5266,11.89421 -6.06725,17.65251 l -13.40458,0 c 0.90965,-7.27726 3.7931,-14.16835 9.62006,-24.09735 l 23.9343,-40.1451 c 4.78,-7.94663 9.55141,-10.83866 18.19316,-10.83866 l 1.96521,0 0,-0.0687 z"
            style="fill:currentColor;fill-opacity:1;fill-rule:nonzero;stroke:none" />
          <path
            d="m 470.55448,590.11853 c -17.34357,0 -28.02776,10.15212 -37.41612,32.27569 -2.35138,5.5266 -3.71586,12.41769 4.31659,12.34904 4.53971,-0.0769 12.19456,-2.58309 17.57528,-6.29895 -0.45518,1.81931 -0.68654,4.32516 -0.53207,5.83554 l 12.19457,0 c 0.45448,-4.77141 2.27414,-10.67561 6.28179,-17.87564 L 488.207,591.03677 c -5.75831,-0.60965 -11.6625,-0.91824 -17.65252,-0.91824 m -12.64939,29.39225 c -2.49727,2.35138 -7.34592,5.82696 -11.4308,5.90419 -2.81479,-0.14623 -2.96068,-2.79762 -1.07271,-6.43626 7.20861,-13.85941 14.85489,-21.20533 24.16601,-21.13667 l 1.67343,0 -13.33593,21.66874 z"
            style="fill:currentColor;fill-opacity:1;fill-rule:nonzero;stroke:none" />
          <path
            d="m 595.85298,590.11853 c -17.34358,0 -28.01918,10.15212 -37.41612,32.27569 -2.35138,5.5266 -3.71587,12.41769 4.31658,12.34904 4.54829,-0.0769 12.19457,-2.58309 17.57528,-6.29895 -0.45449,1.81931 -0.68653,4.32516 -0.53206,5.83554 l 12.20314,0 c 0.44625,-4.77141 2.26557,-10.67561 6.28179,-17.87564 l 15.15525,-25.36744 c -5.75831,-0.60965 -11.67108,-0.91824 -17.58386,-0.91824 m -12.6494,29.39225 c -2.49727,2.35138 -7.34591,5.82696 -11.43079,5.90419 -2.81479,-0.14623 -2.96068,-2.79762 -1.06413,-6.43626 7.20003,-13.85941 14.8463,-21.20533 24.16601,-21.13667 l 1.67342,0 -13.34451,21.66874 z"
            style="fill:currentColor;fill-opacity:1;fill-rule:nonzero;stroke:none" />
          <path
            d="m 556.23569,646.55426 -4.01623,0 c -5.149,0 -9.69729,-3.48416 -11.0532,-8.41005 l -6.05867,-22.87017 -11.29349,19.00842 -12.95833,0 36.21469,-61.35901 c 4.69417,-7.95522 9.54282,-10.83866 18.18457,-10.83866 l 1.36449,0 -24.09735,40.68574 18.0301,-12.42627 14.4773,0 -30.37915,20.99079 11.58527,35.21921 z"
            style="fill:currentColor;fill-opacity:1;fill-rule:nonzero;stroke:none" />
          <path
            d="m 436.6955,555.64853 c -12.19456,0 -18.56217,3.26104 -30.53361,11.89421 l -40.59993,29.24636 -25.98532,0 c -7.50897,0 -13.55906,0.30002 -18.26182,4.76283 l -6.73662,6.22172 c 0,0 19.54049,-0.76377 37.72507,-1.4503 l -38.86643,28.04493 16.82009,0 39.77609,-28.7143 c 7.72351,-0.30895 13.0184,-0.45449 13.10422,-0.45449 9.24247,-0.24029 14.39148,-8.41005 14.39148,-8.41005 l -15.2239,0 32.11264,-23.18769 -23.85707,38.63472 c -5.08035,8.86487 -7.57762,15.23248 -8.41004,22.04633 l 13.79076,0 c 0.52382,-5.75831 2.49727,-11.73974 6.05008,-17.65251 l 32.5074,-54.23622 c 2.26557,-3.71586 4.23935,-6.7452 4.23935,-6.7452 l -2.04244,0 z"
            style="fill:currentColor;fill-opacity:1;fill-rule:nonzero;stroke:none" />
          <path
            d="m 501.38764,602.54054 c -0.15447,1.14137 0.30894,1.89655 2.65173,3.40693 l 3.71587,2.42003 c 4.01623,2.66032 5.67249,6.67655 5.15759,9.92901 -1.37307,9.08799 -8.04103,16.43391 -22.27804,16.43391 -6.22172,0 -9.01934,-0.2142 -16.4425,-1.43314 l 5.5266,-9.3197 c 5.15759,0.90966 8.03246,1.37307 11.89421,1.37307 5.3893,0 7.50897,-2.42862 7.80933,-4.40241 0.14555,-1.13278 -0.38652,-2.49726 -2.9521,-4.24793 l -2.96068,-2.11109 c -4.69417,-3.40693 -5.98143,-6.05867 -5.37213,-10.22936 1.21002,-8.02387 10.52114,-14.24559 23.40224,-14.24559 4.09346,0 8.48728,0.23136 13.33593,0.76377 l -5.22624,8.79622 c -3.19239,-0.24029 -8.33281,-0.54099 -11.97144,-0.38583 -3.63864,0.0769 -6.05867,1.3559 -6.29037,3.25246"
            style="fill:currentColor;fill-opacity:1;fill-rule:nonzero;stroke:none" />
        </g>
      </svg>
    `;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'primary': this.primary,
      'emphasis': this.emphasis,
      'accent': this.accent,
      'disabled': this.disabled,
      'error': this.error,
      'success': this.success,
      'advisory': this.advisory,
      'warning': this.warning,
      'alaska': this.alaska
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="util_displayHiddenVisually">
          <slot></slot>
        </div>
        <slot name="icon">${this.svg}</slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-icon")) {
  customElements.define("auro-icon", AuroIcon);
}
