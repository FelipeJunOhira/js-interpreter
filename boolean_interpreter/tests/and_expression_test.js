var expect = require('chai').expect;

var Expression = require('../expression/expression');
var AndExpression = require('../expression/and_expression');

var TrueExpression = require('../expression/true_expression');
var FalseExpression = require('../expression/false_expression');

describe('AndExpression', function() {
  it('can be instantiated', function() {
    expect(new AndExpression()).to.be.instanceOf(AndExpression);
  });

  it('inherit from Expression', function() {
    expect(new AndExpression()).to.be.instanceOf(Expression);
  });

  describe('.evaluate', function() {
    var trueExpression;
    var falseExpression;

    beforeEach(function() {
      trueExpression = new TrueExpression();
      falseExpression = new FalseExpression();
    });

    context('returns true', function() {
      specify('when it receive TrueExpression and TrueExpression instances', function() {
        var expression = new AndExpression(trueExpression, trueExpression);
        expect(expression.evaluate()).to.be.equal(true);
      });
    });

    context('returns false', function() {
      specify('when it receive TrueExpression and FalseExpression instances', function() {
        var expression = new AndExpression(trueExpression, falseExpression);
        expect(expression.evaluate()).to.be.equal(false);
      });

      specify('when it receive FalseExpression and TrueExpression instances', function() {
        var expression = new AndExpression(falseExpression, trueExpression);
        expect(expression.evaluate()).to.be.equal(false);
      });

      specify('when it receive FalseExpression and FalseExpression instances', function() {
        var expression = new AndExpression(falseExpression, falseExpression);
        expect(expression.evaluate()).to.be.equal(false);
      });
    });
  });
});
