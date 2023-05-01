import { AbstractCategoryService } from '../classes';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests';

class SmartphonesService extends AbstractCategoryService {
	constructor() {
		super(
			{
				both: BothRequests.getSmartphones,
				meli: MeliRequests.getSmartphones,
				buscape: BuscapeRequests.getSmartphones,
			}
		);
	}
}

export default SmartphonesService;
