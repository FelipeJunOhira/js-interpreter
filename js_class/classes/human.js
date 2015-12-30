module.exports = (function() {

  function Human() {
  }

  Human.new = function() {
    var obj = Object.create(Human.prototype);
    this.apply(obj, arguments);
    return obj;
  }

  return Human;
})();
