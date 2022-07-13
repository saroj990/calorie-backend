import mongoose from 'mongoose';
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: String,
  amount: String, // String is shorthand for {type: String}
  carbohydrates: Number,
  protein: Number,
  fat: Number,
  fiber: Number,
  calories: Number,
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false },
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;
