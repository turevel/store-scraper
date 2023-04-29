import IProduct from '../interfaces/IProducts';
import Companies from '../types/Companies';

export interface IExec {
  both: () => Promise<IProduct[]>,
  meli: () => Promise<IProduct[]>,
  buscape: () => Promise<IProduct[]>,
}

export default abstract class AbstractSmartphonesService {
	protected static exec: IExec;

	protected static configureExec() {
		throw new Error('Not implemented');
	}

	public static async get(company: Companies) {
		AbstractSmartphonesService.configureExec();
		return AbstractSmartphonesService.exec[company]();
	}
}
