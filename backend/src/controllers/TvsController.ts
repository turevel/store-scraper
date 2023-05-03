import AbstractCategoryController from './AbstractCategoryController';

import { TvsService } from '../services';

class TvsController extends AbstractCategoryController {
	constructor() { super(new TvsService()); }
}

export default TvsController;
