// src/logger.js

// use 'info' as our standard log level if not specified
const options = { level: process.env.LOG_LEVEL } || 'info';

// If we are doing 'debug' logging, make the logs easier to read
if (options.level == 'debug') {
  options.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
    }
  }
}
import pino from 'pino';
export default pino(options);
