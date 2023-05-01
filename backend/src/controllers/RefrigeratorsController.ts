import { AbstractCategoryController } from '../classes';
import { RefrigeratorsService } from '../services';

class RefrigeratorsController extends AbstractCategoryController {
	constructor() {
		const service = new RefrigeratorsService();
		super(service);
	}
}

export default RefrigeratorsController;
