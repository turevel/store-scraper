import Companies from '../types/Companies';

import { Request, Response } from 'express';

export default abstract class AbstractController {
	protected static companies: Companies[] = ['both', 'meli', 'buscape'];

	protected static getCompany(company: string | undefined): Companies {
		if (company === undefined) return 'both';

		if (AbstractController.companies.includes(company as Companies)) {
			return company as Companies;
		}

		return 'both';
	}

	public static async get(_req: Request, _res: Response): Promise<Response> {
		throw new Error('Not implemented');
	}
}
