import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import "dotenv/config";

import { version, author, repository } from '../package.json';

import logger from './logger';
import pinoHTTP from 'pino-http';
const pino = pinoHTTP({
  // Use our default logger instance, that is already configured 
  logger,
});

const app: Express = express();

// Using Logging Middleware
app.use(pino);

// Secure Express App by setting HTTP Headers
app.use(helmet());

// Use gzip/deflate compression Middleware to Compress HTTP Responses from Express app
app.use(compression());

// Using CORS so we can make requests Cross-Origin
app.use(cors());


// Health Check Route. 
// If server is healthy, we return `200 OK` response. If not, server isn't healthy
app.get('/', (req: Request, res: Response) => {

  // Client shouldn't cache this response (always request it fresh)
  res.setHeader('Cache-Control', 'no-cache');

  res.status(200).json({
    status: 'ok',
    author,
    version,
    github: repository.url.split('+')[1],

  })
})

// 404 Middleware - resource,route not Found
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    error: {
      message: "Not Found",
      code: 404,
    }
  })
});

// Catch-All Error Handler - triggered whenever an `error` is passed to `next` function
//Error-Handling Middleware to deal with anything else example: Server errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response) => {
  const status = err.status || 500;
  const message = err.message || "Cannot process the Request";

  // If this is a server error, log something so we can see what's going on
  if (status > 499) {
    logger.error({ err }, `Error Processing Request`);
  }

  res.status(status).json({
    status: "error",
    error: {
      message,
      code: status,
    }
  })

});

export default app;


