import { Joi } from 'celebrate';

const itemParams = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  amount: Joi.string().required(),
  carbohydrates: Joi.number().required(),
  protein: Joi.number().required(),
  fat: Joi.number().required(),
  fiber: Joi.number().required(),
  calories: Joi.number().required(),
  date: Joi.date().default(Date.now),
  hidden: Joi.boolean(),
});

const updateItemParams = Joi.object({
  name: Joi.string().min(2).max(30),
  amount: Joi.string(),
  carbohydrates: Joi.number(),
  protein: Joi.number(),
  fat: Joi.number(),
  fiber: Joi.number(),
  calories: Joi.number(),
  date: Joi.date().default(Date.now),
  hidden: Joi.boolean(),
});

const getItemParams = Joi.object({ id: Joi.string().required() });

export default {
  createItem: {
    body: itemParams,
  },
  getItemById: {
    params: getItemParams,
  },
  deleteItem: {
    params: getItemParams,
  },
  updateItem: {
    params: getItemParams,
    body: updateItemParams,
  },
};
