var Expression = require('./expression');

module.exports = (function() {

  function OrExpression(leftExpression, rightExpression) {
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  };

  OrExpression.prototype = Object.create(Expression.prototype);
  OrExpression.prototype.constructor = OrExpression;

  OrExpression.prototype.evaluate = function() {
    return this.leftExpression.evaluate() || this.rightExpression.evaluate();
  };

  return OrExpression;
})();
