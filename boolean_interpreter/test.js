var expect = require('chai').expect;

var Expression = require('./expression/expression');
var TrueExpression = require('./expression/true_expression');

describe('TrueExpression', function() {
  it('can be instantiated', function() {
    expect(new TrueExpression()).to.be.instanceOf(TrueExpression);
  });

  it('inherit from Expression', function() {
    expect(new TrueExpression()).to.be.instanceOf(Expression);
  });
});
