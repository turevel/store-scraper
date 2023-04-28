import IProduct from '../interfaces/IProducts';

import { load, CheerioAPI } from 'cheerio';

const MAIN_CONTENT_QUERY = '.ui-search-results.shops__search-results';
const ITEMS_QUERY = '.ui-search-layout__item';
const ITEM_IMAGE_QUERY = '.slick-slide.slick-active img';
const ITEM_TITLE_QUERY = '.ui-search-item__title.shops__item-title';
const ITEM_LINK_QUERY = '.ui-search-link';
const ITEM_PRICE_QUERY = '.price-tag-amount';

class MeliExtractor {
	private static loader: CheerioAPI;

	private static load(content: string) {
		MeliExtractor.loader = load(content);
	}

	private static getMainContent() {
		return MeliExtractor.loader(MAIN_CONTENT_QUERY);
	}

	private static getSearchedItems() {
		const main = MeliExtractor.getMainContent();
		return main.find(ITEMS_QUERY);
	}

	private static fixString(str: string) {
		return str
			.split('\n').join(' ')
			.split(' ')
			.filter((v) => v !== '')
			.join(' ');
	}

	public static extract(content: string) {
		MeliExtractor.load(content);
		const items = MeliExtractor.getSearchedItems();

		const data: IProduct[] = [];

		items.each((_, element) => {
			const el = MeliExtractor.loader(element);

			data.push({
				image: MeliExtractor
					.fixString(el.find(ITEM_IMAGE_QUERY).attr('data-src') || ''),

				link: MeliExtractor
					.fixString(el.find(ITEM_LINK_QUERY).attr('href') || ''),

				title: MeliExtractor
					.fixString(el.find(ITEM_TITLE_QUERY).text()),

				price: MeliExtractor
					.fixString(el.find(ITEM_PRICE_QUERY).first().text()),

				font: 'Mercado Livre' });
		});

		return data;
	}
}

export default MeliExtractor;
