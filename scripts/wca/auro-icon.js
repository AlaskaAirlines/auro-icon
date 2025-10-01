import { AuroIcon } from "../../src/auro-icon.js";

/**
 * auro-icon provides users a way to use the Auro Icons by simply passing in the category and name.
 */
class AuroIconWCA extends AuroIcon {}

if (!customElements.get("auro-icon")) {
  customElements.define("auro-icon", AuroIconWCA);
}
