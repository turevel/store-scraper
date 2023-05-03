import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';
import { Marketplaces, Categories } from '../../types';
import Select from '../select';

import { useContext } from 'react';

const MARKETPLACES_OPTIONS = {
	both: 'Todas',
	meli: 'Mercado Livre',
	buscape: 'Buscapé',
};

const CATEGORIES_OPTIONS = {
	both: 'Todas',
	phones: 'Celulares',
	refrigerators: 'Geladeiras',
	tvs: 'Tv\'s',
};

function FilteredSearch() {
	const context = useContext(RequestContext);

	return (
		<sc.Container>
			<sc.SelectContainer>
				<span>Fonte:</span>
				<Select
					disabled={ context.loading }
					onChange={ (value) => context.setMarketplace(value as Marketplaces) }
					options={ MARKETPLACES_OPTIONS }
					value={ context.marketplace }
				/>
			</sc.SelectContainer>

			<sc.SelectContainer>
				<span>Categorias:</span>
				<Select
					disabled={ context.loading }
					onChange={ (value) => context.setCategory(value as Categories) }
					options={ CATEGORIES_OPTIONS }
					value={ context.category }
				/>
			</sc.SelectContainer>
		</sc.Container>
	);
}

export default FilteredSearch;
