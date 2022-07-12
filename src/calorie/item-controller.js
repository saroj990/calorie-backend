import seederService from '../seeder-service';
import ItemService from './item-service';

const createItem = async (req, res) => {
  try {
    const item = await ItemService.createItem(req.body);
    return res.json(item);
  } catch (error) {
    console.log(error);
    return res.status(500).send('unable to create item');
  }
};

const getItems = async (req, res) => {
  const items = await ItemService.getItems();
  return res.json(items);
};

const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error('id is empty');
    const item = await ItemService.getItemById(id);
    return res.json(item);
  } catch (error) {
    console.log(error);
    return res.status(500).smend(error);
  }
};

const deleteItem = async (id) => {
  try {
    if (!id) throw new Error('id is empty, deletion not allowed');
    const item = await ItemService.deleteItem(id);
    return res.json(item);
  } catch (error) {
    console.log(error);
    return res.status(500).send(`Unable to delete item with ${id}`);
  }
};

const seed = async (req, res) => {
  try {
    await seederService.seed();
    return res.send('done');
  } catch (error) {
    console.log(error);
    return res.status(500).send('Unable to seed data');
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('req.body: ', req.body);
    const { carbohydrates, fat, protein, fiber, calories, name, amount } =
      req.body;
    if (!id) throw new Error('id or payload is empty');
    const updated = await ItemService.updateItem(id, {
      carbohydrates,
      fat,
      protein,
      fiber,
      calories,
      name,
      amount,
    });
    return res.json(updated);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error updating the item');
  }
};

export default {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  seed,
  updateItem,
};
