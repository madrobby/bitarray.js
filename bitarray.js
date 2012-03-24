function BitArray(size, value){
  if(value === undefined) value = 0;
  this.size = size;
  this.field = new Array(~~((size - 1) / BitArray.ELEMENT_WIDTH) + 1);
  for(var i = 0; i < this.field.length; i++) 
    this.field[i] = value == 0 ? 0 : (value << BitArray.ELEMENT_WIDTH) - 1;
}

// will fail for values higher than 30
BitArray.ELEMENT_WIDTH = 24;

// Set a bit (1/0)
BitArray.prototype.set = function(position, value){
  if (value == 1)
    this.field[~~(position/BitArray.ELEMENT_WIDTH)] |= 1 << (position % BitArray.ELEMENT_WIDTH);
  else if(this.field[~~(position/BitArray.ELEMENT_WIDTH)] & 1 << (position % BitArray.ELEMENT_WIDTH))
    this.field[~~(position/BitArray.ELEMENT_WIDTH)] ^= 1 << (position % BitArray.ELEMENT_WIDTH);
}

// Read a bit (1/0)
BitArray.prototype.get = function(position){
  return (this.field[~~(position/BitArray.ELEMENT_WIDTH)] & 1 << (position % BitArray.ELEMENT_WIDTH)) > 0 ? 1 : 0;
}

// Iterate over each bit
BitArray.prototype.each = function(method){
  for (var index = 0; index < this.size; index++) method(this.get(index), index);
}

// Returns the field as a string like "0101010100111100," etc.
BitArray.prototype.toString = function(){
  var string = this.field.map(function(ea){
    var binary = ea.toString(2);
    binary = (new Array(BitArray.ELEMENT_WIDTH - binary.length + 1).join('0')) + binary;
    return binary;
  }).reverse().join('');
  return string.split('').reverse().join('').slice(0,this.size);
}