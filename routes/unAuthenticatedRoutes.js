import express from 'express';
import userController from '../src/user/user-controller';
const router = express();

router.post('/register', userController.register);
router.post('/login', userController.login);

export default router;
