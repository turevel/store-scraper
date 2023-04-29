import { AbstractController } from '../abstract';
import { RefrigeratorsService } from '../services';

import { Request, Response } from 'express';

class RefrigeratorsController extends AbstractController {
	public static async get({ query }: Request, res: Response) {
		const company = RefrigeratorsController.getCompany(String(query.company));
		const data = await RefrigeratorsService.get(company);
		return res.status(200).json(data);
	}
}

export default RefrigeratorsController;
