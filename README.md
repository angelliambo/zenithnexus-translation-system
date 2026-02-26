# ZenithNexus Translation System

Professional translation synchronization system for i18n projects.

## Description

A powerful CLI tool for managing translations in internationalization (i18n) projects. It automatically synchronizes translations between a source language and multiple target languages, detects unused translation keys, and manages translation caches.

## Features

- 🔄 **Sync Translations**: Automatically translate from source language to multiple target languages
- 🔍 **Dead Key Detection**: Find unused translation keys in your codebase
- 💾 **Translation Cache**: Smart caching to avoid redundant translations
- ⚡ **Multiple Translation APIs**: Fallback support for multiple translation services
- 📦 **ZIP Build**: Create distributable packages for Chrome Web Store

## Installation

### Global Installation

```bash
npm install -g zenithnexus-translation-system
```

### Local Development

```bash
# Clone and install
git clone https://github.com/angelliambo/zenithnexus-translation-system.git
cd zenithnexus-translation-system
npm install
npm run build

# Run locally with node
node bin/zn.js --help

# Or create a symlink
npm link
zn --help
```

## Usage

### CLI Commands

```bash
# Show help
zn --help

# Sync all translations
zn sync

# Sync specific language
zn sync --lang=en-US

# Preview changes without saving
zn sync --dry-run

# Detect dead keys
zn detect

# Clean dead keys
zn detect --clean

# Show configuration
zn config

# Show cache status
zn status

# Clear translation cache
zn cache clear
```

### Programmatic Usage

```typescript
import { loadConfig, sync, detect } from 'zenithnexus-translation-system';

// Load configuration
const config = loadConfig();

// Initialize sync command
sync.init(config);

// Sync all languages
await sync.syncAll();

// Detect dead keys
detect.detect({ clean: true });
```

## Configuration

Create a `zn-config.json` file in your project root:

```json
{
  "sourceLanguage": "es-MX",
  "targetLanguages": ["es-MX", "es-ES", "en-US", "en-GB", "fr-FR", "pt-BR", "it-IT", "de-DE", "ja-JP"],
  "paths": {
    "source": "src/locales/pages",
    "target": "src/locales/translations"
  },
  "timeout": {
    "warning": 120000,
    "exit": 300000
  }
}
```

## Supported Languages

- 🇲🇽 Spanish (Mexico) - es-MX
- 🇪🇸 Spanish (Spain) - es-ES
- 🇺🇸 English (USA) - en-US
- 🇬🇧 English (UK) - en-GB
- 🇫🇷 French - fr-FR
- 🇧🇷 Portuguese (Brazil) - pt-BR
- 🇮🇹 Italian - it-IT
- 🇩🇪 German - de-DE
- 🇯🇵 Japanese - ja-JP

## API Translation Services

The system uses multiple translation APIs with automatic fallback:

1. LibreTranslate (Terra)
2. LibreTranslate (Argos)
3. MyMemory
4. Google Translate

## License

MIT

## Author

ZenithNexus
