import axios from 'axios';

import { readFileSync } from 'fs';
import { resolve } from 'path';

export default abstract class AbsRequests {
	protected static req = axios.create();

	protected static readMock(filename: string) {
		return readFileSync(resolve(__dirname, '..', 'mocks', filename));
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
