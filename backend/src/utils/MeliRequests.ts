import AbstractRequests from './AbstractRequests';
import MeliExtractor from './MeliExtractor';

// SMARTPHONES_URL = 'https://lista.mercadolivre.com.br/celular';
// REFRIGERATORS_URL = 'https://lista.mercadolivre.com.br/geladeira';
// TVS_URL = 'https://lista.mercadolivre.com.br/tv';

class MeliRequests extends AbstractRequests {
	public static async getSmartphones() {
		// const data = await MeliRequests.makeRequest(SMARTPHONES_URL);
		const data = MeliRequests.readMock('MELI-smartphones.html');
		return MeliExtractor.extract(data.toString());
	}

	public static async getRefrigerators() {
		// const data = await MeliRequests.makeRequest(REFRIGERATORS_URL);
		const data = MeliRequests.readMock('MELI-refrigerators.html');
		return MeliExtractor.extract(data.toString());
	}

	public static async getTvs() {
		// const data = await MeliRequests.makeRequest(TVS_URL);
		const data = MeliRequests.readMock('MELI-tvs.html');
		return MeliExtractor.extract(data.toString());
	}
}

export default MeliRequests;
