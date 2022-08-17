import express from 'express';
import authenticatedRoutes from './routes/authenticatedRoutes';
import unAuthenticatedRoutes from './routes/unAuthenticatedRoutes';

import { isLoggedIn } from './middlewares/auth';

const router = express.Router();

router.use('/profile', unAuthenticatedRoutes);
router.use('/', isLoggedIn, ...authenticatedRoutes);

export default router;
