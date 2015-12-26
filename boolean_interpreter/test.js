var expect = require('chai').expect;

var TrueExpression = require('./expression/true_expression');

describe('TrueExpression', function() {
  it('can be instantiated', function() {
    expect(new TrueExpression()).to.be.instanceOf(TrueExpression);
  });
});
