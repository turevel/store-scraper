import { AbstractService } from '../classes';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class TvsService extends AbstractService {
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
