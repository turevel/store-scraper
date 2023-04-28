import router from './routes/routes';

import cors from 'cors';
import express from 'express';

class App {
	public app: express.Express;

	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	private config() {
		this.app.use(express.json());
		this.app.use(cors());
	}

	private routes() {
		this.app.use(router);
	}

	public start(port: number) {
		this.app.listen(port, () => console.log(`App rodando na porta: ${port}...`));
	}
}

export default App;
