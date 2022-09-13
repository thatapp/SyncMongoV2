/* eslint-disable no-underscore-dangle */
let { messages } = require('elasticio-node');
let axioshelper = require('../services/axios');
const variable = require("../services/variable");

async function processAction(msg, cfg) {
  let that = this;
  try {
    let data = msg;
    let { apiKey } = cfg;
    let payload = {
      database: variable.getData(msg.body.database,msg),
      collection: variable.getData(msg.body.collection,msg),
      filter: variable.getData(data.body.condition,msg),
    };

    let data_ = await axioshelper.initialiseAxios("deleteMany", payload, apiKey);
    await that.emit('data', messages.newMessageWithBody(data_));
  } catch (error) {
    await that.emit('error', messages.newMessageWithBody(error));
  }
}
module.exports.process = processAction;
