import * as sc from './styles';

import IProduct from '../../interfaces/IProduct';

function ProductCard({ product }: { product: IProduct; }) {
	return (
		<sc.Card>
			<sc.ImageContainer>
				<sc.Image src={ product.image } />
			</sc.ImageContainer>

			<sc.Title className="title">
				{ product.title }
			</sc.Title>

			<sc.PriceAndCompanyContainer>
				<sc.Price>
					{ product.price }
				</sc.Price>

				<sc.Company>
					{ `de ${product.company}` }
				</sc.Company>
			</sc.PriceAndCompanyContainer>

			<sc.Link
				href={ product.link }
				target="_blank"
				title="Visualizar em uma nova guia"
			>
        Visualizar o produto
			</sc.Link>
		</sc.Card>
	);
}

export default ProductCard;
