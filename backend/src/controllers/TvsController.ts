import { AbstractController } from '../classes';
import { TvsService } from '../services';

class TvsController extends AbstractController {
	constructor() {
		const service = new TvsService();
		super(service);
	}
}

export default TvsController;
