import express from 'express';
import MealController from './meal-controller';
const router = express.Router();

router.route('/meal').get(MealController.getMeals).post(MealController.addMeal);
router
  .route('/meal/:id')
  .delete(MealController.deleteMeal)
  .put(MealController.updateMeal);

export default router;
