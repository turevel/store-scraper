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

	public static getSmartphones() {
		throw new Error('Not implemented');
	}

	public static getRefrigerators() {
		throw new Error('Not implemented');
	}

	public static getTvs() {
		throw new Error('Not implemented');
	}
}
