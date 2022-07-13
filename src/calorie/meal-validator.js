import Joi from 'joi';
const MealValidatorSchema = Joi.object({
  date: Joi.string().required(),
  mealType: Joi.string().required(),
  quantity: Joi.number().required(),
  itemId: Joi.string().required(),
  extra: Joi.object(),
});

export default MealValidatorSchema;
