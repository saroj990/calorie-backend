import Joi from 'joi';

const ItemValidatorSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    amount: Joi.string().required(),
    carbohydrates: Joi.number().required(),
    protein: Joi.number().required(),
    fat: Joi.number().required(),
    fiber: Joi.number().required(),
    calories: Joi.number().required(),
    date: Joi.date().default(Date.now),
    hidden: Joi.boolean()
});

export default ItemValidatorSchema;