// import express
import express from 'express';

// import bodyParser
const bodyParser = require('body-parser');

// import dotenv for environment variables management
const dotenv = require('dotenv');

import cors from 'cors';

const appRouter = require('./routes')

// instantiate dotenv
dotenv.config();

// initialize express
const app = express();

app.use(cors());
// configure body-parser for express
app.use(bodyParser.json({ extended: true }));

// handles all the routing
app.use(appRouter);

const PORT = process.env.PORT || 4000;

// start the express server
app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`);
});