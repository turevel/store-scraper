import { AbstractService } from '../abstract';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class RefrigeratorsService extends AbstractService {
	protected static async configureExec() {
		RefrigeratorsService.exec = {
			both: BothRequests.getRefrigerators,
			meli: MeliRequests.getRefrigerators,
			buscape: BuscapeRequests.getRefrigerators,
		};
	}
}

export default RefrigeratorsService;
