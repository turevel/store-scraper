import { AbstractController } from '../abstract';
import { TvsService } from '../services';

class TvsController extends AbstractController {
	protected static configureExec() {
		TvsController.service = TvsService;
	}
}

export default TvsController;
