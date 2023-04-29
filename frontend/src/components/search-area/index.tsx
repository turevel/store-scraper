import * as sc from './styles';

import Search from '../search';

import { FaSpider } from 'react-icons/fa';

function SearchArea() {
	return (
		<sc.Container>
			<sc.Logo>
				<FaSpider className="icon" />
				Store Scraper
			</sc.Logo>

			<sc.SearchContainer>
				<Search />
			</sc.SearchContainer>
		</sc.Container>
	);
}

export default SearchArea;
