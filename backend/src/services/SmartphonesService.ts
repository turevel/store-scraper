import { AbstractService } from '../classes';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests';

class SmartphonesService extends AbstractService {
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
