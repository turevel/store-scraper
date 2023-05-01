import IProduct from '../../interfaces/IProducts';

import { Schema, model } from 'mongoose';

interface ISearch {
  query: string;
  products: IProduct[];
}

const productSchema = new Schema<IProduct>({
	image: { type: String, required: true },
	title: { type: String, required: true },
	link: { type: String, required: true },
	price: { type: String, required: true },
	company: { type: String, required: true },
});

const searchSchema = new Schema<ISearch>({
	query: { type: String, unique: true },
	products: { type: [productSchema], required: true }
});

export default model<ISearch>('Search', searchSchema);
