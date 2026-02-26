/**
 * Configuration Types
 */

export interface LanguageConfig {
  code: string;
  name: string;
  region?: string;
}

export interface TimeoutConfig {
  warning: number;
  exit: number;
}

export interface PathsConfig {
  source: string;
  target: string;
}

export interface ZenithConfig {
  sourceLanguage: string;
  targetLanguages: string[];
  paths: PathsConfig;
  timeout: TimeoutConfig;
}

export interface Config extends ZenithConfig {
  // Additional runtime properties
}
