import { AbstractController } from '../classes';
import { RefrigeratorsService } from '../services';

class RefrigeratorsController extends AbstractController {
	constructor() {
		const service = new RefrigeratorsService();
		super(service);
	}
}

export default RefrigeratorsController;
