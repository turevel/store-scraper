import { AbstractCategoryController } from '../classes';
import { SmartphonesService } from '../services';

class SmartphonesController extends AbstractCategoryController {
	constructor() {
		const service = new SmartphonesService();
		super(service);
	}
}

export default SmartphonesController;
