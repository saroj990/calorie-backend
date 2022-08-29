import express from 'express';
import schemaValidator from '../../util/schema-validator';
import MealController from './meal-controller';
import mealValidator from './meal-validator';
const router = express.Router();

const validate = schemaValidator.getEndPointValidator(mealValidator);

router
  .route('/meal')
  .get(MealController.getMeals)
  .post(validate(MealController.addMeal));
router
  .route('/meal/:id')
  .get(validate(MealController.getMeal))
  .delete(validate(MealController.deleteMeal))
  .put(validate(MealController.updateMeal));

export default router;
