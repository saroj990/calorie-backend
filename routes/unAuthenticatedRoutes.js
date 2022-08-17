import express from 'express';
import userController from '../src/user/user-controller';
const router = express.Router();

router.post('/user/register', userController.register);
router.post('/user/login', userController.login);

export default router;
