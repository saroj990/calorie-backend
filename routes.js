import express from 'express';
import authenticatedRoutes from './routes/authenticated-routes';
import unAuthenticatedRoutes from './routes/unauthenticate-routes';

import { isLoggedIn } from './middlewares/auth';

const router = express.Router();

router.use('/profile', unAuthenticatedRoutes);
router.use('/', isLoggedIn, ...authenticatedRoutes);

export default router;
