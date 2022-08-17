import express from 'express';

import authenticatedRoutes from './routes/authenticatedRoutes';
import unAuthenticatedRoutes from './routes/unAuthenticatedRoutes';

import { isLoggedIn } from './middlewares/auth';

const router = express.Router();

router.use('/', isLoggedIn, ...authenticatedRoutes);
router.use('/', unAuthenticatedRoutes);

export default router;
