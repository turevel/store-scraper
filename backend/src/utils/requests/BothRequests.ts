import BuscapeRequests from './BuscapeRequests';
import MeliRequests from './MeliRequests';

class BothRequests {
	public static async getSmartphones() {
		const meli = await MeliRequests.getSmartphones();
		const buscape = await BuscapeRequests.getSmartphones();
		return [...meli, ...buscape];
	}

	public static async getRefrigerators() {
		const meli = await MeliRequests.getRefrigerators();
		const buscape = await BuscapeRequests.getRefrigerators();
		return [...meli, ...buscape];
	}

	public static async getTvs() {
		const meli = await MeliRequests.getTvs();
		const buscape = await BuscapeRequests.getTvs();
		return [...meli, ...buscape];
	}

	public static async search(query: string) {
		const meli = await MeliRequests.search(query);
		const buscape = await BuscapeRequests.search(query);
		return [...meli, ...buscape];
	}
}

export default BothRequests;
