import express from 'express';
import calorieRoutes from './src/calorie/item-routes';

const router = express.Router();
const routes = [calorieRoutes];

router.use('/', ...routes);

export default router;
