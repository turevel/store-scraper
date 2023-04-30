import IProduct from '../interfaces/IProduct';
import Categories from '../types/Categories';
import Companies from '../types/Companies';

import axios from 'axios';

const API_URL = 'http://localhost:3001';

class Requests {
	private static ax = axios.create({ baseURL: API_URL });

	public static async getCategory(category: Categories, company: Companies):
    Promise<IProduct[]> {
		try {
			const url = `${API_URL}/${category}?company=${company}`;
			const { data } = await Requests.ax.get(url);
			return data;
		} catch (_) { return []; }
	}
}

export default Requests;
