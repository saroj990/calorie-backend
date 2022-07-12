import Item from './calorie/item';
import path from 'path';
import csv from 'csvtojson';
const seed = async () => {
  const csvFilePath = path.join(__dirname, '../data', 'seeder.csv');
  const jsonArray = await csv().fromFile(csvFilePath);
  const promiseArr = [];
  for (const item of jsonArray) {
    promiseArr.push(Item.create(item));
  }
  try {
    await Promise.all(promiseArr);
  } catch (error) {
    console.log(error);
  }
};

export default {
  seed,
};
