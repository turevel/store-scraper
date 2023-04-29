import * as sc from './styles';

import Loading from '../../components/loading';
import SearchArea from '../../components/search-area';

import { RequestContext } from '../../provider/RequestProvider';

import { useContext } from 'react';

function Home() {
	const { loading } = useContext(RequestContext);

	return (
		<sc.Main>
			<SearchArea />
			{ loading && <Loading /> }
		</sc.Main>
	);
}

export default Home;
