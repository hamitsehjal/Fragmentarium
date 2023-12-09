import express, { Router, Request, Response } from 'express';
import { author, repository, version } from '../../package.json';
const router: Router = express.Router();
import apiModules from './api';


// Letting express know to mount all routes defined in `api` module
router.use('/v1/rapidtools', apiModules);


// Health Check Route. 
// If server is healthy, we return `200 OK` response. If not, server isn't healthy
router.get('/', (req: Request, res: Response) => {

  // Client shouldn't cache this response (always request it fresh)
  res.setHeader('Cache-Control', 'no-cache');

  res.status(200).json({
    status: 'ok',
    author,
    version,
    github: repository.url.split('+')[1],

  })
})
export default router;
