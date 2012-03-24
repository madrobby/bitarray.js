var fs = require('fs'), filedata = fs.readFileSync('bitarray.js','utf8');
eval(filedata);

var ba = new BitArray(200);
ba.set(100, 1);
console.log(ba.field);
console.log(ba.get(100), 'should be 1');

ba.set(100, 0);
console.log(ba.get(100), 'should be 0');

ba = new BitArray(20);
[1,3,5,9,11,13,15].forEach(function(i){ ba.set(i, 1) });
console.log(ba.toString() == '01010100010101010000', 'should be true');

ba = new BitArray(33,1);
[0].forEach(function(i){ ba.set(i, 0) });
console.log(ba.toString() == '011111111111111111111111111111111', 'should be true');