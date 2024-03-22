import { AuroIcon } from './src/auro-icon.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-icon') => {
  console.warn('registerComponent', name);
  // alias definition
  if (!customElements.get(name)) {
    console.warn('custom name not yet defined');
    customElements.define(name, class extends AuroIcon {});
  }
}

export { registerComponent };
