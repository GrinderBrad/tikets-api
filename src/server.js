const express = require('express');
const bodyParser = require('body-parser');
const TicketsController = require('./controllers/TicketsController');
const logger = require('./services/LoggerService');
const mongoose = require('./DB/MongooseModule');

const bootstrap = async () => {
  const app = express();

  await mongoose.connect();

  app.use('/tickets', TicketsController);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(process.env.PORT, () => {
    logger.info(`Server start at: ${process.env.PORT}`);
  });
};


bootstrap();
