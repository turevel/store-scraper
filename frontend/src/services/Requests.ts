import IProduct from '../interfaces/IProduct';
import Categories from '../types/Categories';
import Companies from '../types/Companies';

import axios from 'axios';
import dotenv from 'dotenv';

let REACT_APP_API_URL: string;

try {
	dotenv.config();
	REACT_APP_API_URL = String(process.env.REACT_APP_API_URL);
} catch (_) { REACT_APP_API_URL = 'http://localhost:3001'; }

console.log(REACT_APP_API_URL);

const ax = axios.create({ baseURL: REACT_APP_API_URL });

class Requests {
	public static async getProductsByCategory(category: Categories, company: Companies):
    Promise<IProduct[]> {
		try {
			const url = `${REACT_APP_API_URL}/${category}?company=${company}`;
			return (await ax.get(url)).data;
		} catch (_) { return []; }
	}

	public static async getProductsBySearch(search: string, company: Companies):
    Promise<IProduct[]> {
		try {
			const url = `${REACT_APP_API_URL}/search?q=${search}&company=${company}`;
			return (await ax.get(url)).data;
		} catch (_) { return []; }
	}
}

export default Requests;
