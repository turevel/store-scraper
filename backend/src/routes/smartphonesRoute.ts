import { SmartphonesController } from '../controllers';

import express from 'express';

const router = express.Router();

router.get('/', SmartphonesController.get);

export default router;
