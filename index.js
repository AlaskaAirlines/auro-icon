import { AuroIcon } from './src/auro-icon.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-icon', AuroIcon);
