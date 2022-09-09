/* eslint-disable no-underscore-dangle */
const { messages } = require('elasticio-node');
const axioshelper = require('../services/axios');

exports.process = async function process(msg, cfg) {
  const that = this;
  try {
    const url = 'https://data.mongodb-api.com/app/endpoint/data/beta/action/aggregate';
    const ClusterName = 'MigrateCluster0';
    const { apiKey } = cfg;
    const payload = {
      dataSource: ClusterName,
      database: msg.body.database,
      collection: msg.body.collection,
      pipeline: msg.body.pipeline,
    };

    const data_ = await axioshelper.initialiseAxios(url, payload, apiKey);
    await that.emit('data', messages.newMessageWithBody(data_));
  } catch (error) {
    await that.emit('error', messages.newMessageWithBody(error));
  }
};
