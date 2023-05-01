import IProduct from '../interfaces/IProducts';
import Companies from '../types/Companies';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests';

class SearchService  {
	public async search(query: string, company: Companies): Promise<IProduct[]> {
		const requests = {
			both: BothRequests.search,
			meli: MeliRequests.search,
			buscape: BuscapeRequests.search,
		};

		return requests[company](query);
	}
}

export default SearchService;
