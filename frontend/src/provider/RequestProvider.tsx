/* eslint-disable react-hooks/exhaustive-deps */
import IProduct from '../interfaces/IProduct';
import Requests from '../services/Requests';
import { Marketplaces, Categories } from '../types';

import {
	createContext,
	ReactNode,
	useCallback,
	useMemo,
	useState,
	useEffect,
} from 'react';

interface IContext {
	products: IProduct[];
  loading: boolean;
	marketplace: Marketplaces;
	category: Categories;
	search: string;
	setMarketplace: (_mkt: Marketplaces) => void;
	setCategory: (_cgy: Categories) => void;
	setSearch: (_sch: string) => void;
  getProductsByCategory: () => void;
  getProductsBySearch: () => void;
}

export const RequestContext = createContext({} as IContext);

function RequestProvider({ children }: { children: ReactNode; }) {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(false);
	const [marketplace, setMarketplace] = useState<Marketplaces>('both');
	const [category, setCategory] = useState<Categories>('both');
	const [search, setSearch] = useState('');

	const getProductsByCategory = useCallback(async () => {
		if (category === 'both') return;

		setLoading(true);
		setSearch('');

		const response = await Requests.getProductsByCategory(category, marketplace);
		setProducts(response);

		return setLoading(false);
	}, [marketplace, category]);

	const getProductsBySearch = useCallback(async () => {
		if (search.trim() === '') return;

		setLoading(true);
		setCategory('both');

		const response = await Requests.getProductsBySearch(search, marketplace);
		setProducts(response);

		return setLoading(false);
	}, [search, marketplace]);

	useEffect(() => { getProductsByCategory(); }, [category]);

	useEffect(() => {
		getProductsBySearch();
		getProductsByCategory();
	}, [marketplace]);

	const values = useMemo(() => (
		{
			products,
			loading,
			marketplace,
			category,
			search,
			setMarketplace: (mkt: Marketplaces) => setMarketplace(mkt),
			setCategory: (cgy: Categories) => setCategory(cgy),
			setSearch: (sch: string) => setSearch(sch),
			getProductsByCategory,
			getProductsBySearch,
		}
	), [
		products,
		loading,
		marketplace,
		category,
		search,
		getProductsByCategory,
		getProductsBySearch,
	]);

	return (
		<RequestContext.Provider value={ values }>
			{ children }
		</RequestContext.Provider>
	);
}

export default RequestProvider;
