import IProduct from '../interfaces/IProduct';
import { Marketplaces, Categories } from '../types';

import axios from 'axios';

const axiosInstance = axios.create({ baseURL: String(import.meta.env.VITE_APP_API_URL) });

class Requests {
	public static async getProductsByCategory(cgy: Categories, mkt: Marketplaces):
	Promise<IProduct[]> {
		try {
			const route = `/${cgy}?marketplace=${mkt}`;
			return (await axiosInstance.get(route)).data;
		} catch (_) { return []; }
	}

	public static async getProductsBySearch(sch: string, mkt: Marketplaces):
    Promise<IProduct[]> {
		try {
			const search = encodeURI(sch.trim().toLowerCase());
			const route = `/search?q=${search}&marketplace=${mkt}`;
			return (await axiosInstance.get(route)).data;
		} catch (_) { return []; }
	}
}

export default Requests;
