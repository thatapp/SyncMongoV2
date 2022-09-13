/* eslint-disable no-underscore-dangle */
let { messages } = require('elasticio-node');
let axioshelper = require('../services/axios');

module.exports.process = async function processAction(msg, cfg) {
  let that = this;
  try {
    let  apiKey  = cfg.apiKey;
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

