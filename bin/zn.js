#!/usr/bin/env node
/**
 * ZenithNexus Translation System - CLI Entry Point
 */

const path = require('path');
const packageRoot = path.join(__dirname, '..');

// Load and run the compiled CLI
const cli = require(path.join(packageRoot, 'dist/cli/cli'));
cli.init();
