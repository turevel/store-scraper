import refrigeratorsRoute from './refrigeratorsRoute';
import smartphonesRoute from './smartphonesRoute';
import tvsRoute from './tvsRoute';

import express, { Request, Response } from 'express';

const router = express.Router();

router.use('/smartphones', smartphonesRoute);
router.use('/refrigerators', refrigeratorsRoute);
router.use('/tvs', tvsRoute);
router.get('/status', (_req: Request, res: Response) =>
	res.status(200).json({ message: 'A API está em execução...' }));

export default router;
