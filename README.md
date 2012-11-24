[![Build Status](https://secure.travis-ci.org/microjs/bitarray.png?branch=master)](https://travis-ci.org/microjs/bitarray)
# BitArray

BitArray is a simple bit array/bit field library in pure JavaScript

BitArray is based on the Ruby library BitArray by Peter Cooper (https://github.com/peterc/bitarray).

Basic, pure JavaScript bit field.

## Installation

Server:

    $ npm install bitarray

Client:

    $ component install microjs/bitarray

## Examples

Create a bit array 1000 bits wide:

```javascript
var ba = new BitArray(1000);
```

Setting and reading bits:

```javascript
ba.set(100, 1);
ba.get(100); // => 1

ba.set(100, 0);
ba.get(100); // => 0
```

Create a BitArray where all the bits default to 1:

```javascript
var ba = new BitArray(100, 1);
ba.get(50); // => 1
```

toString:

```javascript
var ba = new BitArray(20);
[1,3,5,9,11,13,15].forEach(function(i){ ba.set(i, 1) });
ba.toString(); // => "01010100010101010000"
```

## Notes

The `total_set` method is not ported for now.

There might be bugs, this is just a quick port. Non-sucky tests would be awesome. *hinthint* (The test file from the original repo https://github.com/peterc/bitarray/blob/master/test/test_bitarray.rb should be ported.)

## License

MIT licensed. Copyight 2012 Thomas Fuchs, yada yada.
Original library: Copyright 2007-2012 Peter Cooper, yada yada.