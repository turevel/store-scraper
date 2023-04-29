import { AbstractService } from '../abstract';
import Companies from '../types/Companies';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class TvsService extends AbstractService {
	private static async configureExec() {
		TvsService.exec = {
			both: BothRequests.getSmartphones,
			meli: MeliRequests.getSmartphones,
			buscape: BuscapeRequests.getSmartphones,
		};
	}

	public static async get(company: Companies) {
		TvsService.configureExec();
		return TvsService.exec[company]();
	}
}

export default TvsService;
