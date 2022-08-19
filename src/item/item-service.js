import Item from './item';

const getItems = () => Item.find().lean();
const getItemById = (id) => Item.findById(id).lean();
const deleteItem = (id) => Item.findByIdAndDelete(id).lean();
const updateItem = (id, payload) =>
  Item.findByIdAndUpdate(id, payload, { new: true }).lean();
const createItem = (payload) => Item.create(payload);

export default {
  getItems,
  getItemById,
  deleteItem,
  updateItem,
  createItem,
};
