import IProduct from '../interfaces/IProducts';
import Companies from '../types/Companies';

export interface IRequestTo {
  both: () => Promise<IProduct[]>,
  meli: () => Promise<IProduct[]>,
  buscape: () => Promise<IProduct[]>,
}

export default abstract class AbstractService {
	protected request: IRequestTo;

	constructor(request: IRequestTo) { this.request = request; }

	public async get(company: Companies) {
		return this.request[company]();
	}
}
