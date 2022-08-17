import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import mongo from './util/mongo';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';

// enable cors requests
const corsOptions = {
  origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
  optionsSuccessStatus: 200,
};

// enable cors requests
const port = process.env.PORT || 4000;
const basePath = `/${process.env.API_PATH}`;

dotenv.config();
const app = express();

// initialize mongo connection
mongo();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(basePath, routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors(corsOptions));
app.use(morgan(':method :url :status - :response-time ms'));

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log('Node NOT Exiting...');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
