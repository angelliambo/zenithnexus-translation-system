/**
 * CLI Types
 */

export interface CliOptions {
  command: string;
  args: string[];
  options: Record<string, any>;
}

export interface SyncOptions {
  lang?: string;
  dryRun?: boolean;
  force?: boolean;
}

export interface DetectOptions {
  clean?: boolean;
  verbose?: boolean;
}

export interface BuildOptions {
  output?: string;
}

export interface ConfigOptions {
  show?: boolean;
  path?: boolean;
}
