import AbstractCategoryController from './AbstractCategoryController';

import { PhonesService } from '../services';

class PhonesController extends AbstractCategoryController {
	constructor() { super(new PhonesService()); }
}

export default PhonesController;
