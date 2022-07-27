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
    return res.data;
  } catch (error) {
    return error;
  }
};
