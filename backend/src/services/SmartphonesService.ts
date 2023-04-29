import { AbstractService } from '../abstract';
import Companies from '../types/Companies';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class SmartphonesService extends AbstractService {
	private static async configureExec() {
		SmartphonesService.exec = {
			both: BothRequests.getSmartphones,
			meli: MeliRequests.getSmartphones,
			buscape: BuscapeRequests.getSmartphones,
		};
	}

	public static async get(company: Companies) {
		SmartphonesService.configureExec();
		return SmartphonesService.exec[company]();
	}
}

export default SmartphonesService;
