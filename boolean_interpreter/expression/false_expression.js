var Expression = require('./expression');

module.exports = (function() {

  function FalseExpression() {};

  FalseExpression.prototype = Object.create(Expression.prototype);
  FalseExpression.prototype.constructor = FalseExpression;

  FalseExpression.prototype.evaluate = function() {
    return false;
  };

  return FalseExpression;
})();
