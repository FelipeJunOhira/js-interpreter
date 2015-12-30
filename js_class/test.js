var expect = require('chai').expect;

var Person = require('./classes/person');
var Human = require('./classes/human');

describe('Person', function() {
  describe('#new', function() {
    it('returns a instance of Person', function() {
      var person = Person.new();
      expect(person).to.be.instanceOf(Person);
    });

    it('passes the arguments received to the contructor function', function() {
      var joe = Person.new('Joe', 21);
      expect(joe.name).to.be.equal('Joe');
      expect(joe.age).to.be.equal(21);
    });
  });

  it('inherit from Human', function() {
    var person = Person.new();
    expect(person).to.be.instanceOf(Human);
  });
});
