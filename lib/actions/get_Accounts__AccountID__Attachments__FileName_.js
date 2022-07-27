/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/**
 * Auto-generated action file for "Accounting" API.
 *
 * Generated at: 2019-05-07T14:45:03.581Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / xero-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/Accounts/{AccountID}/Attachments/{FileName}'
 * Method: 'get'
 *
 */

const { messages } = require('elasticio-node');
const axios = require('axios');
const https = require('https');
const http = require('http');
const TenantHelper = require('../util/tenant');

exports.process = async function process(msg, cfg) {
  const that = this;
  const token = cfg.oauth.access_token;
  const url = `https://api.xero.com/api.xro/2.0/Accounts/${msg.body.AccountID}/Attachments/${msg.body.FileName}`;
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
    const response = await axios.get(url, config);
    const result = response.data;
    await that.emit('data', messages.newMessageWithBody({ result }));
  } catch (error) {
    await that.emit('data', messages.newMessageWithBody({ error }));
  }
};
