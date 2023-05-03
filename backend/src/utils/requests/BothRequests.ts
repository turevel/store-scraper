import BuscapeRequests from './BuscapeRequests';
import MeliRequests from './MeliRequests';

class BothRequests {
	public async getPhones() {
		const meli = await new MeliRequests().getPhones();
		const buscape = await new BuscapeRequests().getPhones();
		return [...meli, ...buscape];
	}

	public async getRefrigerators() {
		const meli = await new MeliRequests().getRefrigerators();
		const buscape = await new BuscapeRequests().getRefrigerators();
		return [...meli, ...buscape];
	}

	public async getTvs() {
		const meli = await new MeliRequests().getTvs();
		const buscape = await new BuscapeRequests().getTvs();
		return [...meli, ...buscape];
	}

	public async search(query: string) {
		const meli = await new MeliRequests().search(query);
		const buscape = await new BuscapeRequests().search(query);
		return [...meli, ...buscape];
	}
}

export default BothRequests;
