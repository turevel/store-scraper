import App from './app';

import dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

const API_PORT = Number(process.env.API_PORT);

new App().start(API_PORT);
