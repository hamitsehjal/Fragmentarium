import { Request, Response } from 'express';

import { createSuccessResponse } from '../../response';
import { queryUrls } from '../../model/data';
export default function (req: Request, res: Response) {

  const store = queryUrls();

  return res.status(200).json(createSuccessResponse(store))

}
