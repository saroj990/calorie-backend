import mongoose, { Schema } from 'mongoose';

import { MEAL_TYPES } from '../../util/constants';
const mealTypes = [
  MEAL_TYPES.BREAKFAST,
  MEAL_TYPES.SNACK,
  MEAL_TYPES.LUNCH,
  MEAL_TYPES.DINNER,
];
const MealSchema = new Schema({
  date: { type: Date, default: Date.now },
  mealType: {
    type: String,
    // required: true,
    // validate: {
    //   validator: (value) => mealTypes.includes(value),
    //   message: 'Invalid Meal Type',
    // },
  },
  quantity: { type: Number, required: true },
  itemId: { type: String, required: true },
  extra: { type: Schema.Types.Mixed, default: {} },
});

const Meal = mongoose.model('Meal', MealSchema);

export default Meal;
