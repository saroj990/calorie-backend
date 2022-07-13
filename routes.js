import express from 'express';
import calorieRoutes from './src/item/item-routes';
import mealRoutes from './src/calorie/meal-route';

const router = express.Router();
const routes = [calorieRoutes, mealRoutes];

router.use('/', ...routes);

export default router;
