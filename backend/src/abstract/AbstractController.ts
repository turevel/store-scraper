import { AbstractService } from '.';

import Companies from '../types/Companies';

import { Request, Response } from 'express';

export default abstract class AbstractController {
	protected static companies: Companies[] = ['both', 'meli', 'buscape'];
	protected static service: typeof AbstractService;

	protected static getCompany(company: string | undefined): Companies {
		if (
			company === undefined
			|| !AbstractController.companies.includes(company as Companies)
		) return 'both';

		return company as Companies;
	}

	protected static configureExec() {
		throw new Error('Not implemented');
	}

	public static async get({ query }: Request, res: Response) {
		AbstractController.configureExec();
		const company = AbstractController.getCompany(String(query.company));
		const data = await AbstractController.service.get(company);
		return res.status(200).json(data);
	}
}
