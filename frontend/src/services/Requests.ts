import IProduct from '../interfaces/IProduct';
import Categories from '../types/Categories';
import Companies from '../types/Companies';

import axios from 'axios';

const API_URL = 'http://localhost:3001';

const ax = axios.create({ baseURL: API_URL });

class Requests {
	public static async getProductsByCategory(category: Categories, company: Companies):
    Promise<IProduct[]> {
		try {
			const url = `${API_URL}/${category}?company=${company}`;
			return (await ax.get(url)).data;
		} catch (_) { return []; }
	}

	public static async getProductsBySearch(search: string, company: Companies):
    Promise<IProduct[]> {
		try {
			const url = `${API_URL}/search?q=${search}&company=${company}`;
			return (await ax.get(url)).data;
		} catch (_) { return []; }
	}
}

export default Requests;
