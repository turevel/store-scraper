import * as sc from './styles';

import { BiSearch } from 'react-icons/bi';

function Search() {
	return (
		<sc.Container>
			<sc.Input
				placeholder="Digite um termo de busca..."
				type="input"
			/>

			<sc.Submit title="Pesquisar" type="button">
				<BiSearch className="icon" />
			</sc.Submit>
		</sc.Container>
	);
}

export default Search;
