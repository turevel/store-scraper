import { AbstractController } from '../abstract';
import { SmartphonesService } from '../services';

class SmartphonesController extends AbstractController {
	protected static configureExec() {
		SmartphonesController.service = SmartphonesService;
	}
}

export default SmartphonesController;
