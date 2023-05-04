import App from './app.tsx';
import AppProvider from './provider/AppProvider.tsx';
import './styles/main.css';

import { Analytics } from '@vercel/analytics/react';

import ReactDOM from 'react-dom/client';

ReactDOM
	.createRoot(document.getElementById('root') as HTMLElement)
	.render(
		<>
			<Analytics />
			<AppProvider>
				<App />
			</AppProvider>
		</>
	);
