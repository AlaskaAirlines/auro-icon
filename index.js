import { AuroIcon } from './src/auro-icon.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-icon') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroIcon {});
  }
}

export { registerComponent };
