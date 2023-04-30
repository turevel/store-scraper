import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';
import Categories from '../../types/Categories';
import Companies from '../../types/Companies';
import Select from '../select';

import { useContext } from 'react';

const COMPANIES_OPTIONS = {
	both: 'Todas',
	meli: 'Mercado Livre',
	buscape: 'Buscapé',
};

const CATEGORIES_OPTIONS = {
	both: 'Todas',
	smartphones: 'Celular',
	refrigerators: 'Geladeira',
	tvs: 'Tvs',
};

function FilteredSearch() {
	const {
		company,
		category,
		changeCompany,
		changeCategory,
	} = useContext(RequestContext);

	return (
		<sc.Container>
			<sc.SelectContainer>
				<span>Fonte:</span>
				<Select
					onChange={ (value) => changeCompany(value as Companies) }
					options={ COMPANIES_OPTIONS }
					value={ company }
				/>
			</sc.SelectContainer>

			<sc.SelectContainer>
				<span>Categorias:</span>
				<Select
					onChange={ (value) => changeCategory(value as Categories) }
					options={ CATEGORIES_OPTIONS }
					value={ category }
				/>
			</sc.SelectContainer>
		</sc.Container>
	);
}

export default FilteredSearch;
