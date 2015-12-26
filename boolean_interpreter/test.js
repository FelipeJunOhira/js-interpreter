var expect = require('chai').expect;

var Expression = require('./expression/expression');
var TrueExpression = require('./expression/true_expression');
var FalseExpression = require('./expression/false_expression');

describe('Expressions', function() {

  var behaveAsExpression = function(ExpressionLike) {
    it('can be instantiated', function() {
      expect(new ExpressionLike()).to.be.instanceOf(ExpressionLike);
    });

    it('inherit from Expression', function() {
      expect(new ExpressionLike()).to.be.instanceOf(Expression);
    });
  }

  describe('TrueExpression', function() {
    behaveAsExpression(TrueExpression);

    describe('.evaluate', function() {
      it('returns true', function() {
        var expression = new TrueExpression();
        expect(expression.evaluate()).to.be.equal(true);
      });
    });
  });

  describe('FalseExpression', function() {
    behaveAsExpression(FalseExpression);

    describe('.evaluate', function() {
      it('returns false', function() {
        var expression = new FalseExpression();
        expect(expression.evaluate()).to.be.equal(false);
      });
    });
  });
});
