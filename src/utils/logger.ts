/**
 * Logger Utility
 */

const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  bold: '\x1b[1m'
};

const log = (message: string, color: string = '') => {
  console.log(`${color}${message}${COLORS.reset}`);
};

export const logger = {
  info: (message: string) => log(message, COLORS.blue),
  success: (message: string) => log(message, COLORS.green),
  warning: (message: string) => log(message, COLORS.yellow),
  error: (message: string) => log(message, COLORS.red),
  debug: (message: string) => log(message, COLORS.gray),
  title: (message: string) => log(message, COLORS.bold + COLORS.cyan)
};

export default logger;
