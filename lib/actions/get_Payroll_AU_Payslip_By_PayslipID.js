const { messages } = require('elasticio-node');
const axios = require('axios');

exports.process = function process(msg, cfg) {
  const that = this;
  const token = cfg.oauth.access_token;
  // Make a request for a user with a given ID
  const url = `https://api.xero.com/payroll.xro/1.0/Payslip/${msg.body.PayslipID}`;

  const config = {
    params: msg.body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios.get(url, config)
    .then((response) => {
      that.emit('data', messages.newMessageWithBody(response));
    })
    .catch((error) => {
      const err = JSON.stringify(error);
      that.emit('data', messages.newMessageWithBody(err));
    });
};
