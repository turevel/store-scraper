import phonesRoute from './phonesRoute';
import refrigeratorsRoute from './refrigeratorsRoute';
import searchesRoute from './searchesRoute';
import statusRoute from './statusRoute';
import tvsRoute from './tvsRoute';

import express from 'express';

const router = express.Router();

router.use('/phones', phonesRoute);
router.use('/refrigerators', refrigeratorsRoute);
router.use('/tvs', tvsRoute);
router.use('/search', searchesRoute);
router.use('/status', statusRoute);

export default router;
