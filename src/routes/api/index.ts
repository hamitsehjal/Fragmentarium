import express from 'express';
import { createSuccessResponse } from '../../response';
const router = express.Router();
import createUrl from './createUrl';
import getUrl from './getUrl';

// Add a new URL 
router.post('/url', createUrl);


// Get their URL 
router.get('/url', getUrl);
// Delete a URL
router.get('/url', ((req, res) => {
  res.status(200).json(createSuccessResponse({
    status: 200,
    message: "Testing",
  }))
}))
export default router;
