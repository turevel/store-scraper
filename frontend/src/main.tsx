import App from './app.tsx';
import AppProvider from './provider/AppProvider.tsx';
import './styles/reset.css';

import ReactDOM from 'react-dom/client';

ReactDOM
	.createRoot(document.getElementById('root') as HTMLElement)
	.render(<AppProvider><App /></AppProvider>);
