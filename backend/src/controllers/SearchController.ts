import { SearchService } from '../services';
import Companies from '../types/Companies';

import { Request, Response } from 'express';

class SearchController {
	private companies: Companies[] = ['both', 'meli', 'buscape'];
	private service: SearchService;

	constructor() {
		this.service = new SearchService();
		this.search = this.search.bind(this);
	}

	private getCompanyName(company: string): Companies {
		if (!this.companies.includes(company as Companies)) return 'both';
		return company as Companies;
	}

	public async search({ query }: Request, res: Response) {
		const search = String(query.q);
		const company = this.getCompanyName(String(query.company));
		return res.status(200).json((await this.service.search(search, company)));
	}
}

export default SearchController;
