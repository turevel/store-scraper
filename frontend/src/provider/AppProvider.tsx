import { Themes } from '../types';

import { createContext, useMemo, useState, ReactNode } from 'react';

interface IContext {
  theme: 'light' | 'dark';
  changeTheme: () => void;
}

export const AppContext = createContext({} as IContext);

function AppProvider({ children }: { children: ReactNode; }) {
	const [theme, setTheme] = useState<Themes>('light');

	const values = useMemo(() => (
		{
			theme,
			changeTheme: () => setTheme((prev) => prev === 'light' ? 'dark' : 'light')
		}
	), [theme]);

	return (
		<AppContext.Provider value={ values }>
			{ children }
		</AppContext.Provider>
	);
}

export default AppProvider;
