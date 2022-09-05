/* eslint-disable no-unused-vars */
const { messages } = require('elasticio-node');
const axios = require('axios');
const https = require('https');
const http = require('http');
require('dotenv').config();

exports.process = async function process(msg, cfg) {
  const that = this;
  //   const token = cfg.oauth.access_token;
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    const httpAgent = new http.Agent({ keepAlive: true });
    const httpsAgent = new https.Agent({ keepAlive: true });
    const config = {
      params: msg.body,
      headers: {
        Accept: 'application/json',
      },
      httpAgent,
      httpsAgent,
    };
    this.logger.info('config', config);
    const response = await axios.get(url, config);
    const result = response.data;
    await that.emit('data', messages.newMessageWithBody(result));
  } catch (error) {
    await that.emit('data', messages.newMessageWithBody(error));
  }
};
