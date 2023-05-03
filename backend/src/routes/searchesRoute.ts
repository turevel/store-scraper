import { SearchesController } from '../controllers';

import express from 'express';

const router = express.Router();

router.get('/', new SearchesController().search);

export default router;
