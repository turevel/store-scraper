import AbstractCategoryService from './AbstractCategoryService';

import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class RefrigeratorsService extends AbstractCategoryService {
	constructor() {
		super(
			{
				both: () => new BothRequests().getRefrigerators(),
				meli: () => new MeliRequests().getRefrigerators(),
				buscape: () => new BuscapeRequests().getRefrigerators(),
			}
		);
	}
}

export default RefrigeratorsService;
