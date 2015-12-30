var expect = require('chai').expect;

var Expression = require('./expression/expression');
var TrueExpression = require('./expression/true_expression');
var FalseExpression = require('./expression/false_expression');

describe('Expressions', function() {
  function behaveAsExpression(ExpressionLike) {
    it('can be instantiated', function() {
      expect(new ExpressionLike()).to.be.instanceOf(ExpressionLike);
    });

    it('inherit from Expression', function() {
      expect(new ExpressionLike()).to.be.instanceOf(Expression);
    });
  }

  function behaveAsLiteralExpression(LiteralExpression, context) {
    behaveAsExpression(LiteralExpression);

    describe('.evaluate', function() {
      it('returns ' + context.evaluateValue, function() {
        var expression = new LiteralExpression();
        expect(expression.evaluate()).to.be.equal(context.evaluateValue);
      });
    });
  }

  describe('TrueExpression', function() {
    behaveAsLiteralExpression(TrueExpression, {
      evaluateValue: true
    });
  });

  describe('FalseExpression', function() {
    behaveAsLiteralExpression(FalseExpression, {
      evaluateValue: false
    });
  });


});
