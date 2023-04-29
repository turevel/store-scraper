import { AbstractService } from '../abstract';
import Companies from '../types/Companies';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class RefrigeratorsService extends AbstractService {
	private static async configureExec() {
		RefrigeratorsService.exec = {
			both: BothRequests.getRefrigerators,
			meli: MeliRequests.getRefrigerators,
			buscape: BuscapeRequests.getRefrigerators,
		};
	}

	public static async get(company: Companies) {
		RefrigeratorsService.configureExec();
		return RefrigeratorsService.exec[company]();
	}
}

export default RefrigeratorsService;
