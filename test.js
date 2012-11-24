var assert = require('better-assert');
var BitArray = require('./');

describe('a bit array of length 200', function () {
  var ba = BitArray(200);
  it('lets you set a value to 1', function () {
    ba.set(100, 1);
    assert(ba.get(100) === 1);
  });
  it('lets you set that value back to 0', function () {
    ba.set(100, 0);
    assert(ba.get(100) === 0);
  });
});

describe('a bit array of length 20', function () {
  it('lets you set lots of values independently', function () {
    var ba = BitArray(20);
    [1,3,5,9,11,13,15].forEach(function(i){ ba.set(i, 1) });
    assert(ba.toString() === '01010100010101010000');
  });
});

describe('a bit array with a default of 1', function () {
  it('lets you set a bit to 0', function () {
    var ba = BitArray(33,1);
    ba.set(0, 0)
    assert(ba.toString() == '011111111111111111111111111111111');
  });
});