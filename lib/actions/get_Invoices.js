/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/**
 * Auto-generated action file for "Accounting" API.
 *
 * Generated at: 2019-05-07T14:45:03.622Z
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
 * Endpoint Path: '/Invoices'
 * Method: 'get'
 *
 */

const { messages } = require('elasticio-node');
const axios = require('axios');
const TenantHelper = require('../util/tenant');

exports.process = function process(msg, cfg) {
  const that = this;
  const token = cfg.oauth.access_token;
  console.log(cfg);
  // Make a request for a user with a given ID
  const url = 'https://api.xero.com/api.xro/2.0/Invoices';

  const tenantConfig = {
    params: msg.body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const tenant = TenantHelper.getTenant(tenantConfig);
  console.log(tenant);
  const config = {
    params: msg.body,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'xero-tenant-id': tenant[0].tenantId,
    },
  };

  axios.get(url, config)
    .then((response) => {
      console.log(response);
      that.emit('data', messages.newMessageWithBody(response));
    })
    .catch((error) => {
      console.log(error);
      const err = JSON.stringify(error);
      that.emit('data', messages.newMessageWithBody(err));
    });
};
