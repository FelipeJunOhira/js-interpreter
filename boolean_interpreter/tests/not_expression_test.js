var expect = require('chai').expect;

var Expression = require('../expression/expression');
var NotExpression = require('../expression/not_expression');

var TrueExpression = require('../expression/true_expression');
var FalseExpression = require('../expression/false_expression');

describe('NotExpression', function() {
  it('can be instantiated', function() {
    expect(new NotExpression()).to.be.instanceOf(NotExpression);
  });

  it('inherit from Expression', function() {
    expect(new NotExpression()).to.be.instanceOf(Expression);
  });

  describe('.evaluate', function() {
    context('returns true', function() {
      specify('when it receive FalseExpression instance', function() {
        var expression = new NotExpression(new FalseExpression());
        expect(expression.evaluate()).to.be.equal(true);
      });
    });

    context('returns false', function() {
      specify('when it receive TrueExpression instance', function() {
        var expression = new NotExpression(new TrueExpression());
        expect(expression.evaluate()).to.be.equal(false);
      });
    });
  });
});
