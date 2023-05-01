import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';

import { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';

function Search() {
	const {
		loading,
		search,
		changeSearch,
		requestSearch,
	} = useContext(RequestContext);

	return (
		<sc.Container>
			<sc.Input
				onChange={ (e) => changeSearch(e.target.value) }
				placeholder="Digite um termo de busca..."
				type="input"
				value={ search }
			/>

			<sc.Submit
				disabled={ loading }
				onClick={ requestSearch }
				title="Pesquisar"
				type="button"
			>
				<BiSearch className="icon" />
			</sc.Submit>
		</sc.Container>
	);
}

export default Search;
