import Home from './pages/home';

import { AppContext } from './provider/AppProvider';
import RequestProvider from './provider/RequestProvider';
import GlobalStyles from './styles/global';
import * as themes from './styles/themes';

import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

function App() {
	const { theme } = useContext(AppContext);

	return (
		<ThemeProvider theme={ themes[theme] }>
			<GlobalStyles />
			<RequestProvider>
				<Home  />
			</RequestProvider>
		</ThemeProvider>
	);
}

export default App;
