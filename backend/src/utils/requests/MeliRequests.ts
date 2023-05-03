import AbstractRequests from './AbstractRequests';

import { MeliExtractor } from '../extractors';

class MeliRequests extends AbstractRequests {
	constructor() {
		super(MeliExtractor.extract, 'https://lista.mercadolivre.com.br/');
	}
}

export default MeliRequests;
