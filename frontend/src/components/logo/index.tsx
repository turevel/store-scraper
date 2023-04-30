import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';

import { useContext } from 'react';
import { FaSpider } from 'react-icons/fa';

const INITIAL_STYLE = {
	fontSize: '2.25rem',
	top: 'calc(50vh - 158px)',
	left: '50%',
	transform: 'translateX(-50%)'
};

const MOVE_STYLE = {
	fontSize: '1.7rem',
	top: '15px',
	left: '15px',
};

function Logo() {
	const { loading, data } = useContext(RequestContext);
	return (
		<sc.Logo style={ loading || data.length > 0 ? MOVE_STYLE : INITIAL_STYLE }>
			<FaSpider className="icon" />
			Store Scraper
		</sc.Logo>
	);
}

export default Logo;
