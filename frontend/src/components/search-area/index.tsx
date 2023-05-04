import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';
import FilteredSearch from '../filtered-search';
import Logo from '../logo';
import Search from '../search';

import ThemeSwitcher from '../theme-switcher';

import { useContext } from 'react';

function SearchArea() {
	const { loading, products } = useContext(RequestContext);

	return (
		<sc.Container
			style={
				{ height: loading || products.length > 0 ? '160px' : 'max(59vh, 220px)' }
			}
		>
			<Logo />
			<ThemeSwitcher />

			<sc.SearchArea>
				<Search />
				<FilteredSearch />
			</sc.SearchArea>
		</sc.Container>
	);
}

export default SearchArea;
