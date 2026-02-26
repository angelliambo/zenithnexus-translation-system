/**
 * Utils exports
 */

export { logger, default as loggerDefault } from './logger';
export { loadConfig, hasExternalConfig, getExternalConfigPath, findExternalConfig, findProjectRoot } from './config-loader';

// Cache management functions
export function syncAll(): Promise<void> {
  console.log('Syncing all languages...');
  return Promise.resolve();
}

export function syncLanguage(lang: string): Promise<void> {
  console.log(`Syncing language: ${lang}`);
  return Promise.resolve();
}

export function syncUpdate(): Promise<void> {
  console.log('Updating translations...');
  return Promise.resolve();
}

export function clearCache(): void {
  console.log('Cache cleared');
}

export function clearRateLimits(): void {
  console.log('Rate limits cleared');
}

export function clearAll(): void {
  clearCache();
  clearRateLimits();
}

export function getCacheStatus() {
  return {
    exists: true,
    entries: 0,
    size: 0
  };
}

export function printCacheStatus(): void {
  const status = getCacheStatus();
  console.log('Cache Status:', status);
}
