import dotenvSafe from 'dotenv-safe';
import { connect, ConnectOptions } from 'mongoose';

dotenvSafe.config();

const uri = String(process.env.MONGO_URI);

const options: ConnectOptions = {
	dbName: process.env.MOGO_DATABASE,
	auth: {
		username: process.env.MOGO_USERNAME,
		password: process.env.MOGO_PASSWORD,
	},
};

export default () => connect(uri, options);
