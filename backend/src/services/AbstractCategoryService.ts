import IProduct from '../interfaces/IProduct';
import { Marketplaces } from '../types';

export interface IRequestFunctions {
  both: () => Promise<IProduct[]>,
  meli: () => Promise<IProduct[]>,
  buscape: () => Promise<IProduct[]>,
}

export default abstract class AbstractCategoryService {
	protected requestFunctions: IRequestFunctions;

	constructor(requestFunctions: IRequestFunctions) {
		this.requestFunctions = requestFunctions;
	}

	public async find(marketplace: Marketplaces) {
		return this.requestFunctions[marketplace]();
	}
}
