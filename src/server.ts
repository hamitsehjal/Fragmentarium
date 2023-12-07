
// Gracefully shut-down our Server
import stoppable from 'stoppable';

import logger from './logger';

// Our Express app 
import app from './index';

const port = parseInt(process.env.PORT || '8080', 10);

// Start a Server listening on this port 
const server = stoppable(
  app.listen(port, () => {
    logger.info({ port }, `Server Started`);
  })
);

export default server;

