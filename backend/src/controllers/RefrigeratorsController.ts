import { AbstractController } from '../abstract';
import { RefrigeratorsService } from '../services';

class RefrigeratorsController extends AbstractController {
	protected static configureExec() {
		RefrigeratorsController.service = RefrigeratorsService;
	}
}

export default RefrigeratorsController;
