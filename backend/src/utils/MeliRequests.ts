import AbsRequests from './AbsRequests';
import MeliExtractor from './MeliExtractor';

// SMARTPHONES_URL = 'https://lista.mercadolivre.com.br/smartphones#D[A:Smartphones]';
// REFRIGERATORS_URL = 'https://lista.mercadolivre.com.br/geladeiras#D[A:geladeiras]';
// TVS_URL = 'https://lista.mercadolivre.com.br/tvs#D[A:tvs]';

class MeliRequests extends AbsRequests {
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
