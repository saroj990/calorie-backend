import express from 'express';
import UserController from './user-controller';
const router = express.Router();

router
  .route('/user/:id')
  .get(UserController.getUser)
  .delete(UserController.deleteUser);

export default router;
