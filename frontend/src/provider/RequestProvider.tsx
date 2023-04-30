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
	changeCompany: (_company: Companies) => void;
	changeCategory: (_category: Categories) => void;
  requestCategory: () => void;
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

	const requestCategory = useCallback(async () => {
		setLoading(true);
		setData((await Requests.getCategory(category, company)));
		return setLoading(false);
	}, [company, category]);

	useEffect(() => {
		if (category === 'both') return setData([]);
		requestCategory();
	}, [company, category, requestCategory]);

	const values = useMemo(() => (
		{
			data,
			loading,
			company,
			category,
			changeCompany: (company: Companies) => setCompany(company),
			changeCategory: (category: Categories) => setCategory(category),
			requestCategory,
		}
	), [data, loading, company, category, requestCategory]);

	return (
		<RequestContext.Provider value={ values }>
			{ children }
		</RequestContext.Provider>
	);
}

export default RequestProvider;
