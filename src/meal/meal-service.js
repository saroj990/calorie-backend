import Meal from './meal';
const getMeals = async () => Meal.find();
const addMeal = async (meal) => Meal.create(meal);
const updateMeal = async (id, payload) => Meal.findByIdAndUpdate(id, payload);
const deleteMeal = async (id) => Meal.findByIdAndDelete(id);

export default {
  addMeal,
  updateMeal,
  deleteMeal,
  getMeals,
};
