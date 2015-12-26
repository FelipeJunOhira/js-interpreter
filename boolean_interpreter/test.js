var expect = require('chai').expect;

var Expression = require('./expression/expression');
var TrueExpression = require('./expression/true_expression');
var FalseExpression = require('./expression/false_expression');

describe('Expressions', function() {

  var behaveAsLiteralExpression = function(LiteralExpression, context) {
    it('can be instantiated', function() {
      expect(new LiteralExpression()).to.be.instanceOf(LiteralExpression);
    });

    it('inherit from Expression', function() {
      expect(new LiteralExpression()).to.be.instanceOf(Expression);
    });

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
