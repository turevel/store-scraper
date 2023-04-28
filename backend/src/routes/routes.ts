import Requests from '../utils/Requests';

import express, { Request, Response } from 'express';

const router = express.Router();

router.get(
	'/category=smartphones&company=meli',

	async (_req: Request, res: Response) => {
		const data = await Requests.getSmartphonesOfMeli();
		return res.status(200).json(data);
	}
);

router.get(
	'/category=refrigerators&company=meli',

	async (_req: Request, res: Response) => {
		const data = await Requests.getRefrigeratorsOfMeli();
		return res.status(200).json(data);
	}
);

router.get(
	'/category=tvs&company=meli',

	async (_req: Request, res: Response) => {
		const data = await Requests.getTvsOfMeli();
		return res.status(200).json(data);
	}
);

export default router;
