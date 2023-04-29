import { AbstractService } from '../abstract';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class TvsService extends AbstractService {
	protected static async configureExec() {
		TvsService.exec = {
			both: BothRequests.getTvs,
			meli: MeliRequests.getTvs,
			buscape: BuscapeRequests.getTvs,
		};
	}
}

export default TvsService;
