/* eslint-disable no-unused-vars */
const { messages } = require('elasticio-node');
const axioshelper = require('../services/helper');
require('dotenv').config();

exports.process = async function process(msg, cfg) {
  const that = this;
  try {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    this.logger.info('API_KEY: ', process.env.API_KEY);

    const data = await axioshelper.initialiseAxios(url);
    await that.emit('data', messages.newMessageWithBody(data));
  } catch (error) {
    await that.emit('data', messages.newMessageWithBody(error));
  }
};
