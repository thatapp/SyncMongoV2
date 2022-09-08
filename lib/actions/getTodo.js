/* eslint-disable no-unused-vars */
const { messages } = require('elasticio-node');
const axioshelper = require('../services/helper');
require('dotenv').config();

exports.process = async function process(msg, cfg) {
  const that = this;
  this.logger.info('CFG DETAILS..........');
  this.logger.info(JSON.stringify(cfg));
  this.logger.info('CFG APIKEY..........');
  this.logger.info(cfg.apiKey);
  // this.logger.info('CRED_USERNAME..........');
  // this.logger.info(cfg.credentials.fields.username);
  // this.logger.info('CRED_PASSWORD..........');
  // this.logger.info(cfg.credentials.fields.password);
  // this.logger.info('CRED_APIKEY..........');
  // this.logger.info(cfg.credentials.fields.apiKey);
  try {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    this.logger.info('API_KEY..........');
    // this.logger.info(process.env.API_KEY);

    const data = await axioshelper.initialiseAxios(url);
    await that.emit('data', messages.newMessageWithBody(data));
  } catch (error) {
    await that.emit('error', messages.newMessageWithBody(error));
  }
};
