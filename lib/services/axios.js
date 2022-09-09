/* eslint-disable no-underscore-dangle */
const axios = require('axios');
const http = require('http');
const https = require('https');

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

exports.initialiseAxios = async (url, payload, api_key) => {
  const config = {
    headers: {
      'api-key': api_key,
      'Content-Type': 'application/json',
    },
    httpAgent,
    httpsAgent,
  };

  const response = await axios.post(url, payload, config);

  const data_ = response.data;

  return data_;
};
