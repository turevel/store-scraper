import AbstractRequests from './AbstractRequests';
import BuscapeExtractor from './BuscapeExtractor';

// const SMARTPHONES_URL = 'https://www.buscape.com.br/celular';
// const REFRIGERATORS_URL = 'https://www.buscape.com.br/geladeira';
// const TVS_URL = 'https://www.buscape.com.br/tv';

class BuscapeRequests extends AbstractRequests {
	public static async getSmartphones() {
		// const data = await BuscapeRequests.makeRequest(SMARTPHONES_URL);
		const data = BuscapeRequests.readMock('BUSCAPE-smartphones.html');
		return BuscapeExtractor.extract(data.toString());
	}

	public static async getRefrigerators() {
		// const data = await BuscapeRequests.makeRequest(REFRIGERATORS_URL);
		const data = BuscapeRequests.readMock('BUSCAPE-refrigerators.html');
		return BuscapeExtractor.extract(data.toString());
	}

	public static async getTvs() {
		// const data = await BuscapeRequests.makeRequest(TVS_URL);
		const data = BuscapeRequests.readMock('BUSCAPE-tvs.html');
		return BuscapeExtractor.extract(data.toString());
	}
}

export default BuscapeRequests;
