/**
 * CLI Entry Point
 */

import { Command } from 'commander';
import { sync } from '../commands/sync';
import { detect } from '../commands/detect';
import { build } from '../commands/build';
import { show } from '../commands/config-cmd';
import { logger } from '../utils/logger';
import { loadConfig, getCacheStatus, clearCache } from '../utils';

const program = new Command();

program
  .name('zn')
  .description('ZenithNexus Translation System - Professional translation synchronization for i18n projects')
  .version('1.0.0');

// Sync command
program
  .command('sync')
  .description('Sync translations from source to target languages')
  .option('-l, --lang <language>', 'Sync specific language')
  .option('-d, --dry-run', 'Preview changes without saving')
  .option('-f, --force', 'Force sync even if up to date')
  .action(async (options) => {
    await sync(options);
  });

// Detect command
program
  .command('detect')
  .description('Detect unused (dead) translation keys')
  .option('-c, --clean', 'Remove dead keys automatically')
  .option('-v, --verbose', 'Show detailed information')
  .action(async (options) => {
    await detect(options);
  });

// Build command
program
  .command('build')
  .description('Create distributable packages')
  .option('-o, --output <path>', 'Output directory', 'build')
  .action(async (options) => {
    await build(options);
  });

// Config command
program
  .command('config')
  .description('Show current configuration')
  .action(async () => {
    await show();
  });

// Status command
program
  .command('status')
  .description('Show cache and API status')
  .action(() => {
    const cacheStatus = getCacheStatus();
    console.log('\n=== Cache Status ===');
    console.log('Exists:', cacheStatus.exists);
    console.log('Entries:', cacheStatus.entries);
    console.log('Size:', cacheStatus.size, 'bytes');
  });

// Cache command
program
  .command('cache')
  .description('Manage translation cache')
  .argument('<action>', 'Action: clear, status')
  .action((action) => {
    if (action === 'clear') {
      clearCache();
      console.log('Cache cleared successfully');
    } else if (action === 'status') {
      const status = getCacheStatus();
      console.log(status);
    }
  });

// Help command
program
  .command('help')
  .description('Show help information')
  .action(() => {
    program.help();
  });

export function init() {
  program.parse(process.argv);
}

export default {
  init
};
