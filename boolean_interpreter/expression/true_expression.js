var Expression = require('./expression');

module.exports = (function() {

  function TrueExpression() {};

  TrueExpression.prototype.evaluate = function() {
    return true;
  };

  return TrueExpression;
})();
