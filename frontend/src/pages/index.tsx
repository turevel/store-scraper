import * as sc from './styles';

import Loading from '../components/loading';
import ProductsArea from '../components/products-area';
import SearchArea from '../components/search-area';

import { RequestContext } from '../provider/RequestProvider';

import { useContext } from 'react';

function Home() {
	const { loading, products } = useContext(RequestContext);

	return (
		<sc.Main>
			<SearchArea />
			{ loading && <Loading /> }
			{ !loading && products.length > 0 && <ProductsArea /> }
		</sc.Main>
	);
}

export default Home;
