import MealService from './meal-service';

const getMeals = async (req, res) => {
  try {
    const meals = await MealService.getMeals();
    return res.json(meals);
  } catch (err) {
    console.error(err);
    res.status(500).send('Unable to fetch meals');
  }
};

const addMeal = async (req, res) => {
  try {
    const meal = req.body;
    const created = await MealService.addMeal(meal);
    return res.json(created);
  } catch (err) {
    console.error(err);
    res.status(500).send('Unable to add a meal');
  }
};

const updateMeal = async (req, res) => {
  try {
    const meal = req.body;
    const updated = await MealService.updateMeal(meal);
    return res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).send('Unable to update meal');
  }
};

const deleteMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await MealService.deleteMeal(id);
    return res.json(deleted);
  } catch (err) {
    console.error(err);
    res.status(500).send('Unable to update meal');
  }
};

const getMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const meal = await MealService.getMeal(id);
    return res.status(200).send(meal);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

export default {
  addMeal,
  updateMeal,
  deleteMeal,
  getMeals,
  getMeal,
};
