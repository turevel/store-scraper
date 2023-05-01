import { SearchController } from '../controllers';

import express from 'express';

const router = express.Router();

router.get('/', new SearchController().search);

export default router;
