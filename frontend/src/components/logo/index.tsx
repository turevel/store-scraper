import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';

import { useContext } from 'react';
import { FaSpider } from 'react-icons/fa';

const LOGO_INITIAL_STYLE = {
	bottom: '125px',
	fontSize: '2.25rem',
	left: '50%',
	transform: 'translateX(-50%)'
};

const LOGO_MOVE_STYLE = {
	fontSize: '1.7rem',
	left: '15px',
	top: '15px',
};

function Logo() {
	const { loading, products } = useContext(RequestContext);

	return (
		<sc.Logo
			style={
				loading || products.length > 0
					? LOGO_MOVE_STYLE
					: LOGO_INITIAL_STYLE
			}
		>
			<FaSpider className="icon" />
			Store Scraper
		</sc.Logo>
	);
}

export default Logo;
