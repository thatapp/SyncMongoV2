/* eslint-disable no-underscore-dangle */
const { messages } = require('elasticio-node');
const axioshelper = require('../services/axios');

async function processAction(msg, cfg) {
  const that = this;
  try {
    const url = 'https://data.mongodb-api.com/app/data-maqtf/endpoint/data/beta/action/insertOne';
    const ClusterName = 'MigrateCluster0';
    const { apiKey } = cfg;

    const payload = {
      dataSource: ClusterName,
      database: msg.body.database,
      collection: msg.body.collection,
      document: msg.body.save_data,
    };

    const data_ = await axioshelper.initialiseAxios(url, payload, apiKey);
    await that.emit('data', messages.newMessageWithBody(data_));
  } catch (error) {
    await that.emit('error', messages.newMessageWithBody(error));
  }
}

module.exports.process = processAction;
