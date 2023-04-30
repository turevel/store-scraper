import * as sc from './styles';

import Select from '../select';

import { useState } from 'react';


function FilteredSearch() {
	const [font, setFont] = useState('both');
	const [category, setCategory] = useState('all');

	return (
		<sc.Container>
			<sc.SelectContainer>
				<span>Fonte:</span>
				<Select
					onChange={ (value) => setFont(value) }
					options={
						{
							both: 'Todas',
							meli: 'Mercado Livre',
							buscape: 'Buscapé'
						}
					}
					value={ font }
				/>
			</sc.SelectContainer>
			<sc.SelectContainer>
				<span>Categorias:</span>
				<Select
					onChange={ (value) => setCategory(value) }
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
