// import _ from "lodash";
// const _ = require('lodash');
// import * as _ from 'lodash';
// import * as _ from "lodash";
const _ = require ('lodash');

module.exports = function(errors) {
  const result = {};
  _.forEach(errors, (val, key) => {
    result[key] = val.message;
  });
  return result;
}
// module.export = function sendResetPasswordEmail(user)