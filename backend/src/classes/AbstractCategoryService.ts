import IProduct from '../interfaces/IProducts';
import Companies from '../types/Companies';

export interface IRequestTo {
  both: (_query?: string) => Promise<IProduct[]>,
  meli: (_query?: string) => Promise<IProduct[]>,
  buscape: (_query?: string) => Promise<IProduct[]>,
}

export default abstract class AbstractService {
	protected request: IRequestTo;

	constructor(request: IRequestTo) { this.request = request; }

	public async getByCategory(company: Companies) {
		return this.request[company]();
	}

	public async getBySearch(query: string, company: Companies) {
		return this.request[company](query);
	}
}
