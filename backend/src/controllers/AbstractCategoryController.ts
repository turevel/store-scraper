import { AbstractCategoryService } from '../services';

import { Marketplaces } from '../types';

import { Request, Response } from 'express';

export default class AbstractCategoryController {
	private marketplaces: Marketplaces[] = ['both', 'meli', 'buscape'];
	private service: AbstractCategoryService;

	constructor(service: AbstractCategoryService) {
		this.service = service;
		this.find = this.find.bind(this);
	}

	private getMarketplace(marketplace: string): Marketplaces {
		if (!this.marketplaces.includes(marketplace as Marketplaces)) return 'both';
		return marketplace as Marketplaces;
	}

	public async find({ query }: Request, res: Response) {
		const marketplace = this.getMarketplace(String(query.marketplace));
		return res.status(200).json((await this.service.find(marketplace)));
	}
}
