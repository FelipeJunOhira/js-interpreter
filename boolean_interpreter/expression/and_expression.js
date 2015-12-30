var Expression = require('./expression');

module.exports = (function() {

  function AndExpression(leftExpression, rightExpression) {
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  };

  AndExpression.prototype = Object.create(Expression.prototype);
  AndExpression.prototype.constructor = AndExpression;

  AndExpression.prototype.evaluate = function() {
    return this.leftExpression.evaluate() && this.rightExpression.evaluate();
  };

  return AndExpression;
})();
