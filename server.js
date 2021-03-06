import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import mongo from './util/mongo';
import bodyParser from 'body-parser';
import cors from 'cors';

const corsOptions = {
 origin: ['http://127.0.0.1:3000', 'http://localhost:3000' ],
 optionsSuccessStatus: 200
};

// enable cors requests
const app = express();
const port = 4000;
const basePath = '/api';


// initialize mongo connection
mongo();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors(corsOptions));
app.use(morgan(':method :url :status - :response-time ms'));
app.use(basePath, routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log('Node NOT Exiting...');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
