import { AbstractCategoryController } from '../classes';
import { TvsService } from '../services';

class TvsController extends AbstractCategoryController {
	constructor() {
		const service = new TvsService();
		super(service);
	}
}

export default TvsController;
