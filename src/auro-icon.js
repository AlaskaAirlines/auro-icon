// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import BaseIcon from "./baseIcon.js";
import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

/**
 * Shows an icon from the Auro icon library, or a custom SVG, sized and colored to match
 * Auro interfaces.
 *
 * **Key capabilities**
 * - **Library icons**: set `category` and `name` to load any icon from the Auro icon
 *   library.
 * - **Custom SVGs**: set `customSvg` and put your own `<svg>` in the `svg` slot.
 * - **Color**: `variant` colors the icon by meaning, such as `statusError` or `fareFirst`,
 *   and `customColor` makes it inherit the surrounding text color.
 * - **Light and dark backgrounds**: `appearance="inverse"` switches the default, `disabled`,
 *   `muted`, and `statusError` colors to versions designed for dark backgrounds.
 * - **Labels**: text in the default slot describes the icon to screen readers, and `label`
 *   also shows it next to the icon.
 *
 * **Example**
 * ```html
 * <auro-icon category="interface" name="pin-trip">Your trip starts here</auro-icon>
 * ```
 *
 * @summary Icon from the Auro icon library or a custom SVG, with color variants and an optional label.
 * @customElement auro-icon
 *
 * @slot - Text that describes the icon to screen readers, such as "Your trip starts here". Leave it empty for decorative icons, which screen readers skip. It's shown on screen only when `label` is set. {@category a11y}
 * @slot svg - The custom `<svg>` to show in place of a library icon. {@requiredWhen customSvg} {@category ui}
 * @csspart label - The `<div>` wrapping the default slot's text, visually hidden unless `label` is set.
 * @csspart svg - The `<span>` wrapping the icon's SVG. Library icons also set this part on their `<svg>`, so `::part(svg)` styles both; a custom SVG in the `svg` slot doesn't get it.
 * @cssprop {Color} --ds-auro-icon-color - Color of the icon. Ignored when `customColor` is set.
 * @cssprop {Length} --ds-auro-icon-size - Width and height of the icon.
 */
export class AuroIcon extends BaseIcon {
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
    this.variant = undefined;
    this.uri = "https://cdn.jsdelivr.net/npm/@alaskaairux/icons@latest/dist";
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...BaseIcon.properties,

      /**
       * Sets whether screen readers skip the icon's graphic. When unset or `true`, they skip it, so describe meaningful icons in the default slot; use `false` to have them announce the icon's built-in description. This is the `ariahidden` attribute, not the native `aria-hidden`.
       * @type {"true" | "false"}
       * @category a11y
       */
      ariaHidden: {
        type: String,
        attribute: "ariahidden",
        reflect: true
      },

      /**
       * Sets the icon's category in the Auro icon library, such as `interface` or `in-flight`. Use it with `name`; see https://auro.alaskaair.com/icons/ways-to-use.
       * @relevantWhen !customSvg
       * @category ui
       */
      category: {
        type: String,
        reflect: true
      },

      /**
       * Makes the icon inherit the color of the surrounding text, in place of the `variant` color or `--ds-auro-icon-color`.
       * @category ui
       */
      customColor: {
        type: Boolean,
        attribute: "customcolor",
        reflect: true
      },

      /**
       * Shows the `<svg>` in the `svg` slot instead of loading an icon from the library. `category` and `name` are ignored.
       * @category behavior
       */
      customSvg: {
        type: Boolean,
        attribute: "customsvg"
      },

      /**
       * Shows the default slot's text next to the icon. Without it, the text is hidden on screen and read only by screen readers.
       * @category ui
       */
      label: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets which icon to show, by its file name in the Auro icon library without the extension, such as `pin-trip`. Use it with `category`; see https://auro.alaskaair.com/icons/ways-to-use. If the icon isn't found, an error icon is shown instead, or the default tail logo for names that start with `tail-`.
       * @relevantWhen !customSvg
       * @category ui
       */
      name: {
        type: String,
        reflect: true
      },

      /**
       * Sets the icon's color to match its meaning: an emphasis or state (`accent1`, `disabled`, `muted`), a status (`status*`), a fare class (`fare*`), or a oneworld tier (`tierOneWorld*`). With `appearance="inverse"`, only `disabled`, `muted`, and `statusError` switch to colors designed for dark backgrounds; the other variants keep their standard colors.
       * @type {"accent1" | "disabled" | "muted" | "statusDefault" | "statusInfo" | "statusSuccess" | "statusWarning" | "statusError" | "statusInfoSubtle" | "statusSuccessSubtle" | "statusWarningSubtle" | "statusErrorSubtle" | "fareBasicEconomy" | "fareBusiness" | "fareEconomy" | "fareFirst" | "farePremiumEconomy" | "tierOneWorldEmerald" | "tierOneWorldSapphire" | "tierOneWorldRuby"}
       * @relevantWhen !customColor
       * @category ui
       */
      variant: {
        type: String,
        reflect: true
      },
    };
  }

  static get styles() {
    return [BaseIcon.styles, tokensCss, styleCss, colorCss];
  }

  /**
   * Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-icon` on the same page.
   * @param {string} [name="auro-icon"] - The tag name to register the element under.
   *
   * @example
   * AuroIcon.register("custom-icon") // makes the element available as <custom-icon>
   *
   */
  static register(name = "auro-icon") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroIcon);
  }

  connectedCallback() {
    super.connectedCallback();

    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-icon");
  }

  /**
   * @private
   * @returns {void} Exposes CSS parts for styling from parent components.
   */
  exposeCssParts() {
    this.setAttribute("exportparts", "svg:iconSvg");
  }

  async firstUpdated() {
    await super.firstUpdated();

    /**
     * icons provide a description for screen readers. Icon only instances Auro-button
     * depend on this description to provide context for the user using a screen reader.
     * Removes the SVG description for screen reader if ariaHidden is set to true.
     * `ariahidden="false"` keeps it, so the exposed graphic still has a name.
     */
    if (this.hasAttribute("ariaHidden") && this.ariaHidden !== "false" && this.svg) {
      const svgDesc = this.svg.querySelector("desc");

      if (svgDesc) {
        svgDesc.remove();
        this.svg.removeAttribute("aria-labelledby");
      }
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const labelClasses = {
      labelWrapper: true,
      util_displayHiddenVisually: !this.label,
    };

    const svgClasses = {
      svgWrapper: true,
    };

    return html`
      <div class="componentWrapper">
        <div
          class="${classMap(svgClasses)}"
          title="${ifDefined(this.title || undefined)}">
          <span aria-hidden="${ifDefined(this.ariaHidden || true)}" part="svg">
            ${
              this.customSvg
                ? html`
                <slot name="svg"></slot>
              `
                : html`
                ${this.svg}
              `
            }
          </span>
        </div>

        <div class="${classMap(labelClasses)}" part="label">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
