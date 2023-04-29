import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';
import Search from '../search';

import { useContext } from 'react';
import { FaSpider } from 'react-icons/fa';

function SearchArea() {
	const { loading, data } = useContext(RequestContext);

	return (
		<sc.Container
			style={
				{
					height: loading || data.length > 0
						? '160px' : 'calc(50% - 20px)',
				}
			}
		>
			<sc.SearchContainer>
				<sc.Logo>
					<FaSpider className="icon" />
				Store Scraper
				</sc.Logo>

				<Search />
			</sc.SearchContainer>
		</sc.Container>
	);
}

export default SearchArea;
