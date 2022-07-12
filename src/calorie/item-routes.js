import express from 'express';
import ItemController from './item-controller';
const router = express.Router();

router
  .route('/calorie')
  .get(ItemController.getItems)
  .post(ItemController.createItem);
router
  .route('/calorie/:id')
  .get(ItemController.getItemById)
  .put(ItemController.updateItem)
  .delete(ItemController.deleteItem);

router.route('/calorieApp/seed').get(ItemController.seed);

export default router;
