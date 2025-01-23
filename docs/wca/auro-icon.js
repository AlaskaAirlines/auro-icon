
import { AuroIcon } from '../../src/auro-icon.js';

/**
 * auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.
 *
 * @slot - Hidden from visibility, used for a11y if icon description is needed.
 * @slot svg - Used for custom SVG content.
 */
class AuroIconWCA extends AuroIcon {}

if (!customElements.get("auro-icon")) {
  customElements.define("auro-icon", AuroIconWCA);
}

  