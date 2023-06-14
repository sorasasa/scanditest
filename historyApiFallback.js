const history = require('connect-history-api-fallback');

module.exports = function(app) {
  app.use(history());
};