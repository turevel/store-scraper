import IProducts from '../interfaces/IProducts';

import products from '../mocks/products';

import { createContext, ReactNode, useMemo, useState } from 'react';

interface IContext {
  loading: boolean;
	data: IProducts[];
  request: () => void;
}

export const RequestContext = createContext({} as IContext);

interface IProps {
  children: ReactNode;
}

function RequestProvider({ children }: IProps) {
	const [loading, setLoading] = useState(false);
	const [data] = useState<IProducts[]>(products);

	const values = useMemo(() => (
		{
			loading,
			data,
			request: () => setLoading((prev) => !prev)
		}
	), [loading, data]);

	return (
		<RequestContext.Provider value={ values }>
			{ children }
		</RequestContext.Provider>
	);
}

export default RequestProvider;
