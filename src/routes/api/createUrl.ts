import { Request, Response } from 'express';
import { createSuccessResponse } from '../../response';
import logger from '../../logger';
import { Url } from '../../model/url';
import generateRandomNumber from '../../random'
import { writeUrl } from '../../model/data';
export default function (req: Request, res: Response) {

  const { url } = req.body;
  logger.debug({ url }, `Request Body`)

  const key: number = generateRandomNumber(1, 50000000);
  const url_shortener = new Url({ url });

  url_shortener.save();

  writeUrl(url, key);

  res.status(201).json(createSuccessResponse({
    'short_key': url_shortener.key,
  }))


}
