import AbstractCategoryService from './AbstractCategoryService';

import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class TvsService extends AbstractCategoryService {
	constructor() {
		super(
			{
				both: () => new BothRequests().getTvs(),
				meli: () => new MeliRequests().getTvs(),
				buscape: () => new BuscapeRequests().getTvs(),
			}
		);
	}
}

export default TvsService;
