import Meal from './meal';
const getMeals = async () => Meal.find().lean();
const addMeal = async (meal) => Meal.create(meal);
const updateMeal = async (id, payload) =>
  Meal.findByIdAndUpdate(id, payload, { new: true });
const deleteMeal = async (id) => Meal.findByIdAndDelete(id).lean();
const getMeal = async (id) => Meal.findOne({ id }).lean();

export default {
  addMeal,
  updateMeal,
  deleteMeal,
  getMeals,
  getMeal,
};
