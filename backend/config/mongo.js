const mongoose = require('mongoose');

let log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';

const connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    logger.info('DB Connected Successfully');
  } catch (error) {
    logger.error('DB Connection Failed');
  }
};

module.exports = connection;
