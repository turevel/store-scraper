import AbstractSmartphonesService, { Companies } from '../abstract/AbstractService';

import BuscapeRequests from '../utils/requests/BuscapeRequests';
import MeliRequests from '../utils/requests/MeliRequests';

class SmartphonesService extends AbstractSmartphonesService {
	private static async configureExec() {
		SmartphonesService.exec = {
			both: BuscapeRequests.getSmartphones,
			meli: MeliRequests.getSmartphones,
			buscape: BuscapeRequests.getSmartphones,
		};
	}

	public static async get(company: Companies) {
		SmartphonesService.configureExec();
		console.log(company);
		return SmartphonesService.exec[company]();
	}
}

export default SmartphonesService;
