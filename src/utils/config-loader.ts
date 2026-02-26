/**
 * Configuration Loader
 */

import * as fs from 'fs';
import * as path from 'path';
import { ZenithConfig } from '../types/config';
import { defaultConfig } from '../config/default';

const CONFIG_FILE = 'zn-config.json';

export function loadConfig(): ZenithConfig {
  const configPath = findExternalConfig();
  
  if (configPath && fs.existsSync(configPath)) {
    try {
      const configData = fs.readFileSync(configPath, 'utf-8');
      const externalConfig = JSON.parse(configData);
      return { ...defaultConfig, ...externalConfig };
    } catch (error) {
      console.warn('Failed to load external config, using defaults');
    }
  }
  
  return defaultConfig;
}

export function hasExternalConfig(): boolean {
  return !!findExternalConfig();
}

export function getExternalConfigPath(): string | null {
  return findExternalConfig();
}

export function findExternalConfig(): string | null {
  const searchPaths = [
    path.join(process.cwd(), CONFIG_FILE),
    path.join(process.env.HOME || '', '.zn', CONFIG_FILE)
  ];
  
  for (const searchPath of searchPaths) {
    if (fs.existsSync(searchPath)) {
      return searchPath;
    }
  }
  
  return null;
}

export function findProjectRoot(): string {
  return process.cwd();
}
