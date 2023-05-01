import Home from './pages/home';

import { AppContext } from './provider/AppProvider';
import RequestProvider from './provider/RequestProvider';
import * as themes from './styles/themes';

import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

function App() {
	const { theme } = useContext(AppContext);

	return (
		<RequestProvider>
			<ThemeProvider theme={ themes[theme] }>
				<Home  />
			</ThemeProvider>
		</RequestProvider>
	);
}

export default App;
