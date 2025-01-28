import { fileConfigs as defaultFileConfigs, defaultDocsProcessorConfig } from "@aurodesignsystem/auro-library/scripts/build/processors/defaultDocsProcessor.mjs";
import { Logger } from "@aurodesignsystem/auro-library/scripts/utils/logger.mjs";
import {
  fromAuroComponentRoot,
  processContentForFile,
  templateFiller
} from "@aurodesignsystem/auro-library/scripts/utils/sharedFileProcessorUtils.mjs";

/**
 * @param {ProcessorConfig} config - The configuration for this processor.
 * @returns {import('@aurodesignsystem/auro-library/scripts/utils/sharedFileProcessorUtils').FileProcessorConfig[]}
 */
export const fileConfigs = (config) => [
  ...defaultFileConfigs(config),
  {
    identifier: 'alaska.md',
    input: fromAuroComponentRoot(`docs/partials/alaska.md`),
    output: fromAuroComponentRoot(`demo/alaska.md`)
  }
];

/**
 *
 * @param {ProcessorConfig} config - The configuration for this processor.
 * @return {Promise<void>}
 */
export async function processDocFiles(config = defaultDocsProcessorConfig) {
  // setup
  await templateFiller.extractNames();

  for (const fileConfig of fileConfigs(config)) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await processContentForFile(fileConfig);
    } catch (err) {
      Logger.error(`Error processing ${fileConfig.identifier}: ${err.message}`);
    }
  }
}

processDocFiles().catch(err => {
  Logger.error(`Failed to process docs: ${err}`);
});
 