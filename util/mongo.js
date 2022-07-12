import mongoose from 'mongoose';

// put this inside config
const host = '127.0.0.1';
const port = 27017;
const dbName = 'calorie-counter';

async function main() {
  try {
    await mongoose.connect(`mongodb://${host}:${port}/${dbName}`);
    const db = mongoose.connection;
    db.on('error', (err) => {
      console.log({ err }, 'unable to connect to user mongo database');
      process.exit(1);
    });
    db.once('open', () => {
      console.log(`connected to user mongo database ${host}:${port}/${dbName}`);
    });
  } catch (error) {
    console.log(error);
  }
}

export default main;
