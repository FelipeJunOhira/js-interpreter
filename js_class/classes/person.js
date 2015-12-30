var Human = require('./human');

module.exports = (function() {

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype = Object.create(Human.prototype);
  Person.prototype.constructor = Person;

  Person.new = function() {
    var obj = Object.create(Person.prototype);
    this.apply(obj, arguments);
    return obj;
  }

  return Person;
})();
