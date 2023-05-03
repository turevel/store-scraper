import { TvsController } from '../controllers';

import express from 'express';

const router = express.Router();

router.get('/', new TvsController().find);

export default router;
