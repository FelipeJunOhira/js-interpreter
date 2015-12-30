var expect = require('chai').expect;

var Expression = require('../expression/expression');
var FalseExpression = require('../expression/false_expression');

describe('FalseExpression', function() {
  it('can be instantiated', function() {
    expect(new FalseExpression()).to.be.instanceOf(FalseExpression);
  });

  it('inherit from Expression', function() {
    expect(new FalseExpression()).to.be.instanceOf(Expression);
  });

  describe('.evaluate', function() {
    it('returns false', function() {
      var expression = new FalseExpression();
      expect(expression.evaluate()).to.be.equal(false);
    });
  });
});
