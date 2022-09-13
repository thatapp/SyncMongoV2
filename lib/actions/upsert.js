/* eslint-disable no-underscore-dangle */
let { messages } = require('elasticio-node');
let axioshelper = require('../services/axios');

async function processAction(msg, cfg) {
  let that = this;
  try {
    this.logger.info(JSON.stringify(cfg));
    let { apiKey } = cfg;
    let dataLoad = { $set: msg.body.save_data };

    let payload = {
      database: msg.body.database,
      collection: msg.body.collection,
      filter: msg.body.condition,
      update: dataLoad,
      upsert: true,
    };

    let data_ = await axioshelper.initialiseAxios("updateMany", payload, apiKey);
    await that.emit('data', messages.newMessageWithBody(data_));
  } catch (error) {
    await that.emit('error', messages.newMessageWithBody(error));
  }
}

module.exports.process = processAction;
