/**
 * ZenithNexus Translation System
 * Main entry point for programmatic usage
 */

// Export commands
export { sync, detect, build } from './commands';
export { show as config } from './commands/config-cmd';

// Export config utilities
export { loadConfig, hasExternalConfig, getExternalConfigPath, findExternalConfig, findProjectRoot } from './utils/config-loader';
export { defaultConfig } from './config';
export type { ZenithConfig } from './config';

// Export types
export type { CliOptions, SyncOptions, DetectOptions, BuildOptions, ConfigOptions } from './types';

// Export utility functions
export { syncAll, syncLanguage, syncUpdate, clearCache, clearRateLimits, clearAll, getCacheStatus, printCacheStatus } from './utils';

// Initialize the system
export function init(): void {
  // Initialization logic here
}
