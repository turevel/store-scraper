import dotenvSafe from 'dotenv-safe';
import { connect, ConnectOptions } from 'mongoose';

dotenvSafe.config();

const uri = String(process.env.MONGO_URI);

const options: ConnectOptions = {
	dbName: process.env.MONGO_DATABASE,
	auth: {
		username: process.env.MONGO_USERNAME,
		password: process.env.MONGO_PASSWORD,
	},
};

export default () => connect(uri, options);
