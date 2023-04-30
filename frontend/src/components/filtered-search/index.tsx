import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';
import Categories from '../../types/Categories';
import Companies from '../../types/Companies';
import Select from '../select';

import { useState, useContext } from 'react';


function FilteredSearch() {
	const { company, changeCompany, requestCategory } = useContext(RequestContext);
	const [category, setCategory] = useState('all');

	const handleCategoryChange = (value: string) => {
		setCategory(value);
		requestCategory(value as Categories);
	};

	return (
		<sc.Container>
			<sc.SelectContainer>
				<span>Fonte:</span>
				<Select
					onChange={ (value) => changeCompany(value as Companies) }
					options={
						{
							both: 'Todas',
							meli: 'Mercado Livre',
							buscape: 'Buscapé'
						}
					}
					value={ company }
				/>
			</sc.SelectContainer>
			<sc.SelectContainer>
				<span>Categorias:</span>
				<Select
					onChange={ handleCategoryChange }
					options={
						{
							both: 'Todas',
							smartphones: 'Celular',
							refrigerators: 'Geladeira',
							tvs: 'Tvs',
						}
					}
					value={ category }
				/>
			</sc.SelectContainer>
		</sc.Container>
	);
}

export default FilteredSearch;
