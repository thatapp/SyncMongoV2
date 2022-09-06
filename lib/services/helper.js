/* eslint-disable no-underscore-dangle */
const axios = require('axios');
const http = require('http');
const https = require('https');

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

exports.initialiseAxios = async (url) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    httpAgent,
    httpsAgent,
  };

  const response = await axios.get(url, config);

  const data_ = response.data;

  return data_;
};
