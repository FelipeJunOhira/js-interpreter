var Expression = require('./expression');

module.exports = (function() {

  function TrueExpression() {};

  TrueExpression.prototype = Object.create(Expression.prototype);
  TrueExpression.prototype.constructor = TrueExpression;

  TrueExpression.prototype.evaluate = function() {
    return true;
  };

  return TrueExpression;
})();
