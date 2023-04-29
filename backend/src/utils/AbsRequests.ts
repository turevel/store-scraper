import IProduct from '../interfaces/IProducts';

import axios from 'axios';

import { readFileSync } from 'fs';
import { resolve } from 'path';

export default abstract class AbsRequests {
	protected static readMock(filename: string) {
		return readFileSync(resolve(__dirname, '..', 'mocks', filename));
	}

	protected static async makeRequest(url: string) {
		return (await axios.get(url)).data;
	}

	public static async getSmartphones(): Promise<IProduct[]> {
		throw new Error('Not implemented');
	}

	public static async getRefrigerators(): Promise<IProduct[]> {
		throw new Error('Not implemented');
	}

	public static async getTvs(): Promise<IProduct[]> {
		throw new Error('Not implemented');
	}
}
