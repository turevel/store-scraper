import { AbstractController } from '../classes';
import { SmartphonesService } from '../services';

class SmartphonesController extends AbstractController {
	constructor() {
		const service = new SmartphonesService();
		super(service);
	}
}

export default SmartphonesController;
