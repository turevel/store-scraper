import AbstractCategoryController from './AbstractCategoryController';

import { RefrigeratorsService } from '../services';

class RefrigeratorsController extends AbstractCategoryController {
	constructor() { super(new RefrigeratorsService()); }
}

export default RefrigeratorsController;
