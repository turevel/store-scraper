import { ErrorStatus } from '../classes';

import { Request, Response, NextFunction } from 'express';

export default (err: ErrorStatus, _req: Request, res: Response, _next: NextFunction) => {
	if (err.status !== undefined) {
		return res.status(err.status).json({ message: err.message });
	}
	return res.status(500).json({ message: 'Internal server error!' });
};
