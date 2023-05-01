import { AbstractCategoryService } from '../classes';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class TvsService extends AbstractCategoryService {
	constructor() {
		super(
			{
				both: BothRequests.getTvs,
				meli: MeliRequests.getTvs,
				buscape: BuscapeRequests.getTvs,
			}
		);
	}
}

export default TvsService;
