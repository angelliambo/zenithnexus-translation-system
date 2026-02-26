/**
 * Config Command - Show configuration
 */

import { logger } from '../utils/logger';
import { loadConfig, hasExternalConfig, getExternalConfigPath } from '../utils/config-loader';

export async function show(): Promise<void> {
  logger.title('ZenithNexus Configuration');
  
  const config = loadConfig();
  const hasConfig = hasExternalConfig();
  const configPath = getExternalConfigPath();
  
  console.log('\nSource Language:', config.sourceLanguage);
  console.log('Target Languages:', config.targetLanguages.join(', '));
  console.log('Paths:');
  console.log('  Source:', config.paths.source);
  console.log('  Target:', config.paths.target);
  console.log('Timeout:');
  console.log('  Warning:', config.timeout.warning, 'ms');
  console.log('  Exit:', config.timeout.exit, 'ms');
  
  if (hasConfig && configPath) {
    console.log('\nExternal config:', configPath);
  } else {
    console.log('\nUsing default configuration');
  }
}

// CLI command exports
export const init = async () => {
  await show();
};

export default {
  init,
  show
};
