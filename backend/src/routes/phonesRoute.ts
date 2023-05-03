import { PhonesController } from '../controllers';

import express from 'express';

const router = express.Router();

router.get('/', new PhonesController().find);

export default router;
