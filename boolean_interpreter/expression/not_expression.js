var Expression = require('./expression');

module.exports = (function() {

  function NotExpression(expression) {
    this.expression = expression;
  };

  NotExpression.prototype = Object.create(Expression.prototype);
  NotExpression.prototype.constructor = NotExpression;

  NotExpression.prototype.evaluate = function() {
    return ! this.expression.evaluate();
  };

  return NotExpression;
})();
