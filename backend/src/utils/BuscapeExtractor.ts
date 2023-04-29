import AbstractExtractor from './AbstractExtractor';

import IProduct from '../interfaces/IProducts';

const BUSCAPE = 'https://www.buscape.com.br';
const MAIN_CONTENT_QUERY = '[data-testid="hits"]';
const ITEMS_QUERY = '[data-testid="product-card"]';
const ITEM_IMAGE_QUERY = '[data-testid="product-card::image"]';
const ITEM_NAME_QUERY = '[data-testid="product-card::name"]';
const ITEM_LINK_QUERY = '[data-testid="product-card::card"]';
const ITEM_PRICE_QUERY = '[data-testid="product-card::price"]';

class BuscapeExtractor extends AbstractExtractor {
	public static extract(content: string) {
		BuscapeExtractor.loadHTML(content);
		BuscapeExtractor.setContent(MAIN_CONTENT_QUERY);

		const items = BuscapeExtractor.getElements(ITEMS_QUERY);
		const data: IProduct[] = [];

		items.each((_, item) => {
			const el = BuscapeExtractor.loader(item);

			const noScriptImage = this
				.loader(el.find(`${ITEM_IMAGE_QUERY} noscript`).text()).attr('src');

			data.push({
				image: noScriptImage || el.find(ITEM_IMAGE_QUERY).attr('src') || '',
				title: BuscapeExtractor.normalizeString(el.find(ITEM_NAME_QUERY).text()),
				link: `${BUSCAPE}${el.find(ITEM_LINK_QUERY).attr('href') || ''}`,
				price: BuscapeExtractor.normalizeString(el.find(ITEM_PRICE_QUERY).text()),
				font: 'Buscapé',
			});
		});

		return data;
	}
}

export default BuscapeExtractor;
