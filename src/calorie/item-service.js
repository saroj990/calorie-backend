import Item from './item';

const getItems = () => Item.find();
const getItemById = (id) => Item.findById(id);
const deleteItem = (id) => Item.findByIdAndDelete(id);
const updateItem = (id, payload) => Item.findByIdAndUpdate(id, payload);
const createItem = (payload) => Item.create(payload);

export default {
  getItems,
  getItemById,
  deleteItem,
  updateItem,
  createItem,
};
