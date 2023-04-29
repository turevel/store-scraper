import { AbstractService } from '.';

import Companies from '../types/Companies';

import { Request, Response } from 'express';

export default class AbstractController {
	protected companies: Companies[] = ['both', 'meli', 'buscape'];
	protected service: AbstractService;

	constructor(service: AbstractService) {
		this.service = service;
		this.get = this.get.bind(this);
	}

	protected getCompanyName(company: string): Companies {
		if (!this.companies.includes(company as Companies)) return 'both';
		return company as Companies;
	}

	public async get({ query }: Request, res: Response) {
		const company = this.getCompanyName(String(query.company));
		return res.status(200).json((await this.service.get(company)));
	}
}
