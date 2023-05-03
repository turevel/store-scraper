import IProduct from '../../interfaces/IProduct';

import axios, { Axios } from 'axios';

abstract class AbstractRequests {
	private extractor: (_content: string) => IProduct[];
	private axiosInstance: Axios;

	constructor(extractor: (_content: string) => IProduct[], baseURL: string) {
		this.extractor = extractor;
		this.axiosInstance = axios.create({ baseURL });
	}

	private waitOneSecond() {
		return new Promise((resolve) => setTimeout(resolve, 1000));
	}

	private async request(route: string) {
		await this.waitOneSecond();
		return (await this.axiosInstance.get(route)).data;
	}

	public async getPhones(): Promise<IProduct[]> {
		const data = await this.request('/celular');
		return this.extractor(data);
	}

	public async getRefrigerators(): Promise<IProduct[]> {
		const data = await this.request('/geladeira');
		return this.extractor(data);
	}

	public async getTvs(): Promise<IProduct[]> {
		const data = await this.request('/tv');
		return this.extractor(data);
	}

	public async search(query: string): Promise<IProduct[]> {
		const data = await this.request(query);
		return this.extractor(data);
	}
}

export default AbstractRequests;
