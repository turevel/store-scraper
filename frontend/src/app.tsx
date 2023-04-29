import Home from './pages/home';

import RequestProvider from './provider/RequestProvider';
import * as themes from './styles/themes';

import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<RequestProvider>
			<ThemeProvider theme={ themes.light }>
				<Home  />
			</ThemeProvider>
		</RequestProvider>
	);
}

export default App;
