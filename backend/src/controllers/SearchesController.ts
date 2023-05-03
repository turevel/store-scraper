import { SearchesService } from '../services';
import { Marketplaces } from '../types';

import { Request, Response } from 'express';

class SearchController {
	private marketplaces: Marketplaces[] = ['both', 'meli', 'buscape'];
	private service: SearchesService;

	constructor() {
		this.service = new SearchesService();
		this.search = this.search.bind(this);
	}

	private getMarketplace(marketplace: string): Marketplaces {
		if (!this.marketplaces.includes(marketplace as Marketplaces)) return 'both';
		return marketplace as Marketplaces;
	}

	public async search({ query }: Request, res: Response) {
		const search = String(query.q);
		const marketplace = this.getMarketplace(String(query.marketplace));
		return res.status(200).json((await this.service.search(search, marketplace)));
	}
}

export default SearchController;
