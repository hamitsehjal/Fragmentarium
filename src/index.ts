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

const port = process.env.PORT;

// Health Check Route. If server is healthy, we return `200 OK` response. If not, server isn't healthy
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
app.listen(port, () => {
  console.log(`Express Server running on PORT: ${port}`);
});
