/* eslint-disable no-underscore-dangle */
const { messages } = require('elasticio-node');
const axioshelper = require('../services/axios');

async function processAction(msg, cfg) {
  this.logger.info('Application started...');
  const that = this;
  try {
    const url = 'https://data.mongodb-api.com/app/data-maqtf/endpoint/data/beta/action/find';
    const { apiKey } = cfg;
    const ClusterName = 'MigrateCluster0';
    const payload = {
      dataSource: ClusterName,
      database: msg.body.database,
      collection: msg.body.collection,
      filter: msg.body.condition,
    };

    const data_ = await axioshelper.initialiseAxios(url, payload, apiKey);
    this.logger.info('Success...');
    this.logger.info(data_);
    await that.emit('data', messages.newMessageWithBody(data_));
  } catch (error) {
    this.logger.info('ERROR....');
    await that.emit('error', messages.newMessageWithBody(error));
  }
}

module.exports.process = processAction;
