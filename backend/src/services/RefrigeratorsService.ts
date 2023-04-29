import { AbstractService } from '../classes';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class RefrigeratorsService extends AbstractService {
	constructor() {
		super(
			{
				both: BothRequests.getRefrigerators,
				meli: MeliRequests.getRefrigerators,
				buscape: BuscapeRequests.getRefrigerators,
			}
		);
	}
}

export default RefrigeratorsService;
