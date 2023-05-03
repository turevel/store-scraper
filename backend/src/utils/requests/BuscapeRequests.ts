import AbstractRequests from './AbstractRequests';

import IProduct from '../../interfaces/IProduct';
import { BuscapeExtractor } from '../extractors';

class BuscapeRequests extends AbstractRequests {
	constructor() {
		super(BuscapeExtractor.extract, 'https://www.buscape.com.br/');
	}

	public async search(query: string): Promise<IProduct[]> {
		return await super.search(`/search?q=${query}`);
	}
}

export default BuscapeRequests;
