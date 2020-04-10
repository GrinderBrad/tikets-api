const express = require('express');
const bodyparser = require('body-parser');
const TicketsController = require('./controllers/TicketsController');
const logger = require('./services/LoggerService');
const mongoose = require('./DB/MongooseModule');

const bootstrap = async () => {
  const app = express();
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());
  await mongoose.connect();

  app.use('/tickets', TicketsController);

  app.listen(process.env.PORT, () => {
    logger.info(`Server start at: ${process.env.PORT}`);
  });
};


bootstrap();
