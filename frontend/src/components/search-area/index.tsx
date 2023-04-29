import * as sc from './styles';

import Search from '../search';

function SearchArea() {
	return (
		<sc.Container>
			<sc.Logo>Store Scraper</sc.Logo>

			<sc.SearchContainer>
				<Search />
			</sc.SearchContainer>
		</sc.Container>
	);
}

export default SearchArea;
