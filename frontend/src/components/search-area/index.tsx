import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';
import FilteredSearch from '../filtered-search';
import Logo from '../logo';
import Search from '../search';

import { useContext } from 'react';

function SearchArea() {
	const { loading, data } = useContext(RequestContext);

	return (
		<sc.Container
			style={ { height: loading || data.length > 0 ? '160px' : '50vh' } }
		>
			<Logo />
			<sc.SearchContainer>
				<Search />
				<FilteredSearch />
			</sc.SearchContainer>
		</sc.Container>
	);
}

export default SearchArea;
