const { messages } = require('elasticio-node');
const axios = require('axios');
const https = require('https');
const http = require('http');
const TenantHelper = require('../util/tenant');

exports.process = async function process(msg, cfg) {
  const that = this;
  const token = cfg.oauth.access_token;
  // Make a request for a user with a given ID
  const url = 'https://api.xero.com/api.xro/2.0/Accounts';

  try {
    const tenant = await TenantHelper.getTenant(token);
    const httpAgent = new http.Agent({ keepAlive: true });
    const httpsAgent = new https.Agent({ keepAlive: true });
    const config = {
      params: msg.body,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'xero-tenant-id': tenant[0].tenantId,
      },
      httpAgent,
      httpsAgent,
    };
    const response = await axios.post(url, msg.body, config);
    const result = response.data;
    console.log(result);
    await that.emit('data', messages.newMessageWithBody(result));
  } catch (error) {
    console.log(error);
    await that.emit('data', messages.newMessageWithBody(error));
  }
};
