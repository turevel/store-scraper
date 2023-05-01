import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';
import FilteredSearch from '../filtered-search';
import Logo from '../logo';
import Search from '../search';

import ThemeSwitcher from '../theme-switcher';

import { useContext } from 'react';

function SearchArea() {
	const { loading, data } = useContext(RequestContext);

	return (
		<sc.Container style={ { height: loading || data.length > 0 ? '160px' : '65vh' } }>
			<Logo />
			<ThemeSwitcher />
			<sc.SearchContainer>
				<Search />
				<FilteredSearch />
			</sc.SearchContainer>
		</sc.Container>
	);
}

export default SearchArea;
