import IProduct from '../interfaces/IProducts';

import axios from 'axios';

import { readFileSync } from 'fs';
import { resolve } from 'path';

export default abstract class AbstractRequests {
	private static async delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	protected static readMock(filename: string) {
		return readFileSync(resolve(__dirname, '..', 'mocks', filename));
	}

	protected static async makeRequest(url: string) {
		AbstractRequests.delay(1000);
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

	public static async search(_str: string): Promise<IProduct[]> {
		throw new Error('Not implemented');
	}
}
