import IProduct from '../../interfaces/IProduct';

import { AnyNode, Cheerio, CheerioAPI, load } from 'cheerio';

export default abstract class AbstractExtractor {
	protected static loader: CheerioAPI;
	private static main: Cheerio<AnyNode>;

	protected static normalizeString(str: string) {
		return str
			.split('\n').join(' ')
			.split(' ')
			.filter((v) => v !== '')
			.join(' ');
	}

	protected static load(content: string, mainQuery: string) {
		this.loader = load(content);
		this.main = this.loader(mainQuery);
	}

	protected static getProducts(query: string) {
		return this.main.find(query);
	}

	public static extract(_content: string): IProduct[] {
		throw new Error('Not implemented');
	}
}
