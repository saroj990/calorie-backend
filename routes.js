import express from 'express';
import authenticatedRoutes from './routes/authenticatedRoutes';
import { isLoggedIn } from './middlewares/auth';

const router = express.Router();

router.use('/', isLoggedIn, ...authenticatedRoutes);

export default router;
