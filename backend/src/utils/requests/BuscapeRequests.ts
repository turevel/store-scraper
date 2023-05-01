import AbstractRequests from '../../classes/AbstractRequests';
import BuscapeExtractor from '../extractors/BuscapeExtractor';

const BUSCAPE_URL = 'https://www.buscape.com.br/';
const SMARTPHONES_URL = `${BUSCAPE_URL}celular`;
const REFRIGERATORS_URL = `${BUSCAPE_URL}geladeira`;
const TVS_URL = `${BUSCAPE_URL}tv`;
const SEARCH_URL = `${BUSCAPE_URL}search?q=`;

class BuscapeRequests extends AbstractRequests {
	public static async getSmartphones() {
		const data = await BuscapeRequests.makeRequest(SMARTPHONES_URL);
		return BuscapeExtractor.extract(data.toString());
	}

	public static async getRefrigerators() {
		const data = await BuscapeRequests.makeRequest(REFRIGERATORS_URL);
		return BuscapeExtractor.extract(data.toString());
	}

	public static async getTvs() {
		const data = await BuscapeRequests.makeRequest(TVS_URL);
		return BuscapeExtractor.extract(data.toString());
	}

	public static async search(query: string) {
		const data = await BuscapeRequests.makeRequest(`${SEARCH_URL}${query}`);
		return BuscapeExtractor.extract(data.toString());
	}
}

export default BuscapeRequests;
