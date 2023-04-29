import { AbstractExtractor } from '../../abstract';
import IProduct from '../../interfaces/IProducts';

const MAIN_CONTENT_QUERY = '.ui-search-results.shops__search-results';
const ITEMS_QUERY = '.ui-search-layout__item';
const ITEM_IMAGE_QUERY = '.slick-slide.slick-active img';
const ITEM_NAME_QUERY = '.ui-search-item__title.shops__item-title';
const ITEM_LINK_QUERY = '.ui-search-link';
const ITEM_PRICE_QUERY = '.price-tag-amount';

class MeliExtractor extends AbstractExtractor {
	public static extract(content: string) {
		MeliExtractor.loadHTML(content);
		MeliExtractor.setContent(MAIN_CONTENT_QUERY);

		const items = MeliExtractor.getElements(ITEMS_QUERY);
		const data: IProduct[] = [];

		items.each((_, item) => {
			const el = MeliExtractor.loader(item);

			data.push({
				image: MeliExtractor
					.normalizeString(el.find(ITEM_IMAGE_QUERY).attr('data-src') || ''),

				title: MeliExtractor
					.normalizeString(el.find(ITEM_NAME_QUERY).text()),

				link: MeliExtractor
					.normalizeString(el.find(ITEM_LINK_QUERY).attr('href') || ''),

				price: MeliExtractor
					.normalizeString(el.find(ITEM_PRICE_QUERY).first().text())
					.replace('R$', 'R$ '),

				company: 'Mercado Livre' }
			);
		});

		return data;
	}
}

export default MeliExtractor;
