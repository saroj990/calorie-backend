import MealSchema from './meal-validator';
import MealService from './meal-service';

const getMeals = async (req, res) => {
  try {
    const meals = await MealService.getMeals();
    return res.json(meals);
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to fetch meals');
  }
};

const addMeal = async (req, res) => {
  try {
    const meal = await MealSchema.validateAsync(req.body);
    const created = await MealService.addMeal(meal);
    return res.json(created);
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to add a meal');
  }
};

const updateMeal = async (req, res) => {
  try {
    const meal = await MealSchema.validateAsync(req.body);
    const updated = await MealService.updateMeal(meal);
    return res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to update meal');
  }
};

const deleteMeal = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error('Id is empty');
    const deleted = await MealService.deleteMeal(id);
    return res.json(deleted);
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to update meal');
  }
};

export default {
  addMeal,
  updateMeal,
  deleteMeal,
  getMeals,
};
