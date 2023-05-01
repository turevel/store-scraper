import { RefrigeratorsController } from '../controllers';

import express from 'express';

const router = express.Router();

router.get('/', new RefrigeratorsController().getByCategory);

export default router;
