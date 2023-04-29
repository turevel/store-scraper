import { AbstractController } from '../abstract';
import { TvsService } from '../services';

import { Request, Response } from 'express';

class TvsController extends AbstractController {
	public static async get({ query }: Request, res: Response) {
		const company = TvsController.getCompany(String(query.company));
		const data = await TvsService.get(company);
		return res.status(200).json(data);
	}
}

export default TvsController;
