import MeliExtractor from './MeliExtractor';

import fs from 'fs';
import { resolve } from 'path';

// import axios from 'axios';

/* const MELI_SMARTPHONES_URL = (
	'https://lista.mercadolivre.com.br/smartphones#D[A:Smartphones]'
); */

/* const MELI_REFRIGERATORS_URL = (
	'https://lista.mercadolivre.com.br/geladeiras#D[A:geladeiras]'
); */

/* const MELI_TVS_URL = (
	'https://lista.mercadolivre.com.br/tvs#D[A:tvs]'
); */

/* const BUSCAPE_SMARTPHONES_URL = (
	'https://lista.mercadolivre.com.br/smartphones#D[A:Smartphones]'
); */

class Requests {
	public static async getSmartphonesOfMeli() {
		// const { data } = await axios.get(MELI_SMARTPHONES_URL););
		const data = fs
			.readFileSync(
				resolve(__dirname, '..', 'mocks', 'MELI-smartphones.html')
			);
		return MeliExtractor.extract(data.toString());
	}

	public static async getRefrigeratorsOfMeli() {
		// const { data } = await axios.get(MELI_REFRIGERATORS_URL);
		const data = fs
			.readFileSync(
				resolve(__dirname, '..', 'mocks', 'MELI-refrigerators.html')
			);
		return MeliExtractor.extract(data.toString());
	}

	public static async getTvsOfMeli() {
		// const { data } = await axios.get(MELI_TVS_URL);
		const data = fs
			.readFileSync(
				resolve(__dirname, '..', 'mocks', 'MELI-tvs.html')
			);
		return MeliExtractor.extract(data.toString());
	}

	public static async getSmartphonesOfBuscape() {
		// Implementar
	}

	public static async getRefrigeratorsOfBuscape() {
		// Implementar
	}

	public static async getTvsOfBuscape() {
		// Implementar
	}

	public static async getSmartphonesOfBoth() {
		const meliData = await Requests.getSmartphonesOfMeli();
		const buscapeData = await Requests.getSmartphonesOfMeli();
		return [...meliData, ...buscapeData];
	}

	public static async getRefrigeratorsOfBoth() {
		const meliData = await Requests.getRefrigeratorsOfMeli();
		const buscapeData = await Requests.getRefrigeratorsOfMeli();
		return [...meliData, ...buscapeData];
	}

	public static async getTvsOfBoth() {
		const meliData = await Requests.getTvsOfMeli();
		const buscapeData = await Requests.getTvsOfMeli();
		return [...meliData, ...buscapeData];
	}
}

export default Requests;
