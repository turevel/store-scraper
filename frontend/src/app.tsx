import Home from './pages/home';

import * as themes from './styles/themes';

import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<>
			<ThemeProvider theme={ themes.light }>
				<Home  />
			</ThemeProvider>
		</>
	);
}

export default App;
