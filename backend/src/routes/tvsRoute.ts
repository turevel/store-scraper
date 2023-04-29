import { TvsController } from '../controllers';

import express from 'express';

const router = express.Router();

router.get('/', TvsController.get);

export default router;
