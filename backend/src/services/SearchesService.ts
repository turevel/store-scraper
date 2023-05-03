import SearchModel from '../db/models/SearchModel';
import IProduct from '../interfaces/IProduct';
import { Marketplaces } from '../types';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests';

class SearchService  {
	public async search(query: string, marketplace: Marketplaces): Promise<IProduct[]> {
		const queryAndMarketplace = `${query}&marketplace=${marketplace}`;

		const findProducts = await SearchModel
			.findOne({ query: queryAndMarketplace });

		if (findProducts) {
			return findProducts.products
				.map(({ image, title, link, price, company }) =>
					({image, title, link, price, company }));
		}

		const requestFunctions = {
			both: (qry: string) => new BothRequests().search(qry),
			meli: (qry: string) => new MeliRequests().search(qry),
			buscape: (qry: string) => new BuscapeRequests().search(qry),
		};

		const data = await requestFunctions[marketplace](query);

		await SearchModel.create({ query: queryAndMarketplace, products: data });

		return data;
	}
}

export default SearchService;
