import SearchModel from '../db/models/SearchModel';
import IProduct from '../interfaces/IProducts';
import Companies from '../types/Companies';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests';

class SearchService  {
	public async search(query: string, company: Companies): Promise<IProduct[]> {
		const queryAndCompany = `${query}&company=${company}`;

		const findProducts = await SearchModel
			.findOne({ query: queryAndCompany });

		if (findProducts) {
			return findProducts.products
				.map(({ image, title, link, price, company }) =>
					({image, title, link, price, company }));
		}

		const requests = {
			both: BothRequests.search,
			meli: MeliRequests.search,
			buscape: BuscapeRequests.search,
		};

		const data = await requests[company](query);

		await SearchModel.create({
			query: queryAndCompany,
			products: data,
		});

		return data;
	}
}

export default SearchService;
