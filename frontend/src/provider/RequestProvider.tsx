/* eslint-disable react-hooks/exhaustive-deps */
import IProduct from '../interfaces/IProduct';
import Requests from '../services/Requests';
import Categories from '../types/Categories';
import Companies from '../types/Companies';

import {
	createContext,
	ReactNode,
	useCallback,
	useMemo,
	useState,
	useEffect,
} from 'react';

interface IContext {
	data: IProduct[];
  loading: boolean;
	company: Companies;
	category: Categories;
	search: string;
	changeCompany: (_company: Companies) => void;
	changeCategory: (_category: Categories) => void;
	changeSearch: (_search: string) => void;
  requestCategory: () => void;
  requestSearch: () => void;
}

export const RequestContext = createContext({} as IContext);

interface IProps {
  children: ReactNode;
}

function RequestProvider({ children }: IProps) {
	const [data, setData] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(false);
	const [company, setCompany] = useState<Companies>('both');
	const [category, setCategory] = useState<Categories>('both');
	const [search, setSearch] = useState('');

	const requestCategory = useCallback(async () => {
		if (category === 'both') return;

		setLoading(true);
		setSearch('');
		setData((await Requests.getProductsByCategory(category, company)));

		return setLoading(false);
	}, [company, category]);

	const requestSearch = useCallback(async () => {
		if (search.trim() === '') return;

		setLoading(true);
		setCategory('both');
		setData((await Requests.getProductsBySearch(search, company)));

		return setLoading(false);
	}, [search, company]);

	useEffect(() => { requestCategory(); }, [category]);

	const values = useMemo(() => (
		{
			data,
			loading,
			company,
			category,
			search,
			changeCompany: (company: Companies) => setCompany(company),
			changeCategory: (category: Categories) => setCategory(category),
			changeSearch: (search: string) => setSearch(search),
			requestCategory,
			requestSearch,
		}
	), [
		data,
		loading,
		company,
		category,
		search,
		requestCategory,
		requestSearch,
	]);

	return (
		<RequestContext.Provider value={ values }>
			{ children }
		</RequestContext.Provider>
	);
}

export default RequestProvider;
