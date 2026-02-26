/**
 * Default Configuration
 */

import { ZenithConfig } from '../types/config';

export const defaultConfig: ZenithConfig = {
  sourceLanguage: 'es-MX',
  targetLanguages: [
    'es-MX',
    'es-ES', 
    'en-US',
    'en-GB',
    'fr-FR',
    'pt-BR',
    'it-IT',
    'de-DE',
    'ja-JP'
  ],
  paths: {
    source: 'src/locales/pages',
    target: 'src/locales/translations'
  },
  timeout: {
    warning: 120000,
    exit: 300000
  }
};

export default defaultConfig;
