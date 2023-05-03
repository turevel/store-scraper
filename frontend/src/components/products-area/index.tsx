import * as sc from './styles';

import { RequestContext } from '../../provider/RequestProvider';

import ProductCard from '../product-card';

import { useContext } from 'react';
import { v4 } from 'uuid';

function ProductsArea() {
	const { products } = useContext(RequestContext);

	return (
		<sc.Container>
			<sc.Message>
				Veja os resultados da sua busca:
			</sc.Message>

			<sc.List>
				{
					products.map((product) => (
						<ProductCard
							key={ v4() }
							product={ product }
						/>
					))
				}
			</sc.List>
		</sc.Container>
	);
}

export default ProductsArea;

