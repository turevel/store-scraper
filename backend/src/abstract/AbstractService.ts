import IProduct from '../interfaces/IProducts';

export type Companies = 'meli' | 'buscape' | 'both';

export interface IExec {
  both: () => Promise<IProduct[]>,
  meli: () => Promise<IProduct[]>,
  buscape: () => Promise<IProduct[]>,
}

export default abstract class AbstractSmartphonesService {
	protected static exec: IExec;

	public static async get(_company: Companies): Promise<IProduct[]> {
		throw new Error('Not implemented');
	}
}
