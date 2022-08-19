import express from 'express';
import schemaValidator from '../../util/schema-validator';
import ItemController from './item-controller';
import itemvalidator from './item-validator';
const validate = schemaValidator.getEndPointValidator(itemvalidator);

const router = express.Router();

router
  .route('/calorie')
  .get(ItemController.getItems)
  .post(validate(ItemController.createItem));
router
  .route('/calorie/:id')
  .get(validate(ItemController.getItemById))
  .put(validate(ItemController.updateItem))
  .delete(validate(ItemController.deleteItem));

router.route('/calorieApp/seed').get(ItemController.seed);

export default router;
