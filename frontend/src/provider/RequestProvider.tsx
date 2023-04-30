import IProducts from '../interfaces/IProducts';
import Requests from '../services/Requests';
import Categories from '../types/Categories';

import Companies from '../types/Companies';

import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

interface IContext {
  loading: boolean;
	data: IProducts[];
  request: () => void;
  requestCategory: (_category: Categories) => void;
	changeCompany: (_company: Companies) => void;
	company: Companies;
}

export const RequestContext = createContext({} as IContext);

interface IProps {
  children: ReactNode;
}

function RequestProvider({ children }: IProps) {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<IProducts[]>([]);
	const [company, setCompany] = useState<Companies>('both');

	const requestCategory = useCallback(async (category: Categories) => {
		setLoading(true);
		setData((await Requests.getCategory(category, company)));
		return setLoading(false);
	}, [company]);

	const values = useMemo(() => (
		{
			loading,
			data,
			company,
			changeCompany: (company: Companies) => setCompany(company),
			request: () => setLoading((prev) => !prev),
			requestCategory,
		}
	), [loading, data, company, requestCategory]);

	return (
		<RequestContext.Provider value={ values }>
			{ children }
		</RequestContext.Provider>
	);
}

export default RequestProvider;
