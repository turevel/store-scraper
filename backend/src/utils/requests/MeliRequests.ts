import AbstractRequests from '../../classes/AbstractRequests';
import MeliExtractor from '../extractors/MeliExtractor';

const MELI_URL = 'https://lista.mercadolivre.com.br/';
const SMARTPHONES_URL = `${MELI_URL}/celular`;
const REFRIGERATORS_URL = `${MELI_URL}/geladeira`;
const TVS_URL = `${MELI_URL}/tv`;

class MeliRequests extends AbstractRequests {
	public static async getSmartphones() {
		const data = await MeliRequests.makeRequest(SMARTPHONES_URL);
		return MeliExtractor.extract(data.toString());
	}

	public static async getRefrigerators() {
		const data = await MeliRequests.makeRequest(REFRIGERATORS_URL);
		return MeliExtractor.extract(data.toString());
	}

	public static async getTvs() {
		const data = await MeliRequests.makeRequest(TVS_URL);
		return MeliExtractor.extract(data.toString());
	}

	public static async search(query: string) {
		const data = await MeliRequests.makeRequest(`${MELI_URL}/${query}`);
		return MeliExtractor.extract(data.toString());
	}
}

export default MeliRequests;
