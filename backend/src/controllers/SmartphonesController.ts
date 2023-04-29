import AbstractController from '../abstract/AbstractController';

import SmartphonesService from '../services/SmartphonesService';

import { Request, Response } from 'express';

class SmartphonesController extends AbstractController {
	public static async get({ query }: Request, res: Response) {
		const company = SmartphonesController.getCompany(String(query.company));
		const data = await SmartphonesService.get(company);
		return res.status(200).json(data);
	}
}

export default SmartphonesController;
