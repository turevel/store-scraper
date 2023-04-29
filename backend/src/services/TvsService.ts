import { AbstractService } from '../abstract';
import Companies from '../types/Companies';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class TvsService extends AbstractService {
	private static async configureExec() {
		TvsService.exec = {
			both: BothRequests.getTvs,
			meli: MeliRequests.getTvs,
			buscape: BuscapeRequests.getTvs,
		};
	}

	public static async get(company: Companies) {
		TvsService.configureExec();
		return TvsService.exec[company]();
	}
}

export default TvsService;
