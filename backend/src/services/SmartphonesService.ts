import { AbstractService } from '../abstract';
import { BothRequests, BuscapeRequests, MeliRequests } from '../utils/requests/';

class SmartphonesService extends AbstractService {
	protected static async configureExec() {
		SmartphonesService.exec = {
			both: BothRequests.getSmartphones,
			meli: MeliRequests.getSmartphones,
			buscape: BuscapeRequests.getSmartphones,
		};
	}
}

export default SmartphonesService;
