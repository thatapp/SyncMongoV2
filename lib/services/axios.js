let axios = require('axios');
let http = require('http');
let https = require('https');

// let httpAgent = new http.Agent({ keepAlive: true });
// let httpsAgent = new https.Agent({ keepAlive: true });

exports.initialiseAxios = async (url_parameter, payload, api_key) => {

  let url = "https://data.mongodb-api.com/app/data-maqtf/endpoint/data/beta/action/" + url_parameter;
  let config = {
    headers: {
      'api-key': api_key,
      'Content-Type': 'application/json',
    }
  };
  payload.dataSource = "MigrateCluster0";

  let response = await axios.post(url, payload, config);

  let data_ = response.data;

  return data_;
};
