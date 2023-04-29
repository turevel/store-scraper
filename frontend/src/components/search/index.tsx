import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';

import { useContext } from 'react';

import { BiSearch } from 'react-icons/bi';

function Search() {
	const { request } = useContext(RequestContext);

	return (
		<sc.Container>
			<sc.Input
				placeholder="Digite um termo de busca..."
				type="input"
			/>

			<sc.Submit
				onClick={ request }
				title="Pesquisar"
				type="button"
			>
				<BiSearch className="icon" />
			</sc.Submit>
		</sc.Container>
	);
}

export default Search;
