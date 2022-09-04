import Meal from './meal';

const addMeal = async (meal) => Meal.create(meal);
const deleteMeal = async (id) => Meal.findByIdAndDelete(id).lean();
const getMeal = async (id) => Meal.findOne({ id }).lean();
const getMeals = async () => Meal.find().lean();
const updateMeal = async (id, payload) =>
  Meal.findByIdAndUpdate(id, payload, { new: true });

export default {
  addMeal,
  updateMeal,
  deleteMeal,
  getMeals,
  getMeal,
};
