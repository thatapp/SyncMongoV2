const axios = require('axios');

exports.getTenant = async (token) => {
  try {
    const url = 'https://api.xero.com/connections';

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      shouldKeepAlive: true,
    };
    const res = await axios.get(url, config);
    console.log('RESPONSE', res);
    return res.data;
  } catch (error) {
    console.log('ERROR', error);
    return error;
  }
};
