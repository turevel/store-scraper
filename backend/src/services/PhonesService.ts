import AbstractCategoryService from './AbstractCategoryService';

import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests';

class PhonesService extends AbstractCategoryService {
	constructor() {
		super(
			{
				both: () => new BothRequests().getPhones(),
				meli: () => new MeliRequests().getPhones(),
				buscape: () => new BuscapeRequests().getPhones(),
			}
		);
	}
}

export default PhonesService;
