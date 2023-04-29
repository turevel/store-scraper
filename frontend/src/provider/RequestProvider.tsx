import { createContext, ReactNode, useMemo, useState } from 'react';

interface IContext {
  loading: boolean;
  request: () => void;
}

export const RequestContext = createContext({} as IContext);

interface IProps {
  children: ReactNode;
}

function RequestProvider({ children }: IProps) {
	const [loading, setLoading] = useState(false);

	const values = useMemo(() => (
		{
			loading,
			request: () => setLoading((prev) => !prev)
		}
	), [loading]);

	return (
		<RequestContext.Provider value={ values }>
			{ children }
		</RequestContext.Provider>
	);
}

export default RequestProvider;
