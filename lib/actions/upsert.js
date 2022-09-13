/* eslint-disable no-underscore-dangle */
let { messages } = require('elasticio-node');
let axioshelper = require('../services/axios');
const { JsonataTransform } = require('@elastic.io/component-commons-library');

async function processAction(msg, cfg) {

  let that = this;
  try {
    let database = JsonataTransform.jsonataTransform(msg, cfg, this);
    this.logger.info(database);
    // let { apiKey } = cfg;
    // let dataLoad = { $set: msg.body.save_data };
    //
    //
    // let payload = {
    //   database: msg.body.database,
    //   collection: msg.body.collection,
    //   filter: msg.body.condition,
    //   update: dataLoad,
    //   upsert: true,
    // };
    //
    // let data_ = await axioshelper.initialiseAxios("updateMany", payload, apiKey);
    await that.emit('data', messages.newMessageWithBody({"success": "testing"}));
  } catch (error) {
    await that.emit('error', messages.newMessageWithBody(error));
  }
}

module.exports.process = processAction;
