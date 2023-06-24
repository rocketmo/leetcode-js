const assert = require('assert');

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if (obj == null || typeof classFunction !== 'function') {
    return false;
  }
  
  return Object(obj) instanceof classFunction;
};

assert.equal(checkIfInstanceOf(new Date(), Date), true);
assert.equal(checkIfInstanceOf(Date, Date), false);
assert.equal(checkIfInstanceOf(5, Number), true);
assert.equal(checkIfInstanceOf('123', Number), false);
assert.equal(checkIfInstanceOf('123', String), true);
assert.equal(checkIfInstanceOf('Hello', String), true);
assert.equal(checkIfInstanceOf('true', Boolean), false);
assert.equal(checkIfInstanceOf(true, Boolean), true);
assert.equal(checkIfInstanceOf(5n, BigInt), true);


const nestedClassValue = (() => {
  class Animal {}
  class Dog extends Animal {}
  return checkIfInstanceOf(new Dog(), Animal);
})();
assert.equal(nestedClassValue, true);

console.log('all passed!');
