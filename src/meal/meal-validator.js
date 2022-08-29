import { Joi } from 'celebrate';

const createMealSchema = Joi.object({
  date: Joi.string().required(),
  mealType: Joi.string().required(),
  quantity: Joi.number().required(),
  itemId: Joi.string().required(),
  extra: Joi.object(),
});

const updateMealSchema = Joi.object({
  date: Joi.string(),
  mealType: Joi.string(),
  quantity: Joi.number(),
  itemId: Joi.string(),
  extra: Joi.object(),
});

const paramsMealId = Joi.object({
  id: Joi.string().required(),
});

export default {
  addMeal: {
    body: createMealSchema,
  },
  getMeal: { params: paramsMealId },
  deleteMeal: { params: paramsMealId },
  updateMeal: {
    params: paramsMealId,
    body: updateMealSchema,
  },
};
