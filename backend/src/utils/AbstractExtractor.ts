import IProduct from '../interfaces/IProducts';

import { CheerioAPI, load, Cheerio, AnyNode } from 'cheerio';

export default abstract class AbstractExtractor {
	protected static loader: CheerioAPI;
	private static main: Cheerio<AnyNode>;

	protected static loadHTML(content: string): void {
		AbstractExtractor.loader = load(content);
	}

	protected static setContent(query: string): void {
		AbstractExtractor.main = AbstractExtractor.loader(query);
	}

	protected static getElements(query: string) {
		return AbstractExtractor.main.find(query);
	}

	protected static normalizeString(str: string) {
		return str
			.split('\n').join(' ')
			.split(' ')
			.filter((v) => v !== '')
			.join(' ');
	}

	public static extract(_content: string): IProduct[] {
		throw new Error('Not implemented');
	}
}
