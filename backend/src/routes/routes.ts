import BuscapeRequests from '../utils/BuscapeRequests';
import MeliRequests from '../utils/MeliRequests';

import express, { Request, Response } from 'express';

const router = express.Router();

router.get(
	'/category=smartphones&company=meli',

	async (_req: Request, res: Response) => {
		const data = await MeliRequests.getSmartphones();
		return res.status(200).json(data);
	}
);

router.get(
	'/category=refrigerators&company=meli',

	async (_req: Request, res: Response) => {
		const data = await MeliRequests.getRefrigerators();
		return res.status(200).json(data);
	}
);

router.get(
	'/category=tvs&company=meli',

	async (_req: Request, res: Response) => {
		const data = await MeliRequests.getTvs();
		return res.status(200).json(data);
	}
);

router.get(
	'/category=smartphones&company=buscape',

	async (_req: Request, res: Response) => {
		const data = await BuscapeRequests.getSmartphones();
		return res.status(200).json(data);
	}
);

router.get(
	'/category=refrigerators&company=buscape',

	async (_req: Request, res: Response) => {
		const data = await BuscapeRequests.getRefrigerators();
		return res.status(200).json(data);
	}
);

router.get(
	'/category=tvs&company=buscape',

	async (_req: Request, res: Response) => {
		const data = await BuscapeRequests.getTvs();
		return res.status(200).json(data);
	}
);

export default router;
