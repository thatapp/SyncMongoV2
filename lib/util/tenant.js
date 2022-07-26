const axios = require('axios');

exports.getTenant = async (config) => {
  try {
    const url = 'https://api.xero.com/connections';
    const res = await axios.get(url, config);
    console.log('RESPONSE', res);
    return res.data;
  } catch (error) {
    console.log('ERROR', error);
    return error;
  }
};
