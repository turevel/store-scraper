import * as sc from './styles';

import IProducts from '../../interfaces/IProducts';

interface IProps {
	product: IProducts;
}

function ProductCard({ product }: IProps) {
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

			<sc.Link href={ product.link } target="_blank">
        Visualizar o produto
			</sc.Link>
		</sc.Card>
	);
}

export default ProductCard;
