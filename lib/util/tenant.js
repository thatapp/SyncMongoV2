const axios = require('axios');

exports.getTenant = async (config) => {
  try {
    const url = 'https://api.xero.com/connections';
    const tenant = await axios.get(url, config);
    return tenant;
  } catch (error) {
    return error;
  }
};
