/*
Kata Link:
    https://www.codewars.com/kata/536602df5d0266e7b0000d31
*/


var Morse = {};

Morse.encode = function(message){
  
  if(Morse.isReversedAlpha == "decode") Morse.reverseAlpha();

  var binary = Morse.fraseToBinary(message);
  var integersArray = Morse.binaryToInteger(binary); 

  return integersArray;

};

Morse.fraseToBinary = function(frase) {
  var binary = "";
  
  for(var i = 0; i < frase.length; i++) {
    binary += Morse.alpha[frase[i]];
    binary += "000";

    if(i == frase.length - 1) {
      binary += "0".repeat(32 - (binary.length % 32));
    }
  
  }

  return binary;

};

Morse.binaryToInteger = function(binary) {
  var binaryArray = [];
  // slice binary for 32 bit
  for(var i = 0;  i < binary.length; i += 32) {
      binaryArray.push(binary.slice(i, i + 32).split(""));
  }

  var integersArray = []; 
  // turn binary to integer 
  for(var i = 0; i < binaryArray.length; i++) {
    var temp = 0;
    
    if(binaryArray[i][0] == 1) {
      temp = Morse.invertBinary(binaryArray[i]);
      temp = Morse.addOneToBinary(temp).join("");
      integersArray.push(-parseInt(temp, 2));
    }  
    else {
      integersArray.push(parseInt(binaryArray[i].join(""), 2));
    }



  }

  return integersArray;

};

Morse.decode = function(integerArray){
  //reverse dictionary
  if(Morse.isReversedAlpha == "encode") Morse.reverseAlpha();  
  var holeByteCode = "";
  
  for(var i = 0; i < integerArray.length; i++) {
    var part = Morse.integerToBinary(integerArray[i]);

    if(integerArray[i] < 0) {
      Morse.invertBinary(part);
      Morse.addOneToBinary(part);
    }
    
    holeByteCode += part.join("");
        
  }

return Morse.getFrase(holeByteCode);

};

Morse.getFrase = function(wordBinary) {
  var frase = "";
  var temp = wordBinary.slice(0, wordBinary.lastIndexOf("1") + 1);
  
  temp = temp.split("0000000"); 

  for(var i = 0; i < temp.length; i++) {
    temp[i] = temp[i].split("000");
    
    for(var j = 0; j < temp[i].length; j++) {
      frase += this.alpha[temp[i][j]];
    
    }

    if(i != temp.length - 1) {
     frase += " "; 
    } 
  
  }

  return frase;

};

Morse.integerToBinary = function(integer) {

  if(integer < 0) {
    integer = -integer;
  }
  var bytes = integer.toString(2).split("");
  
  while(bytes.length < 32) { 
    
    bytes.unshift(0);
  
  }
  
  return bytes;

};

Morse.invertBinary = function(bytes) {
      
    for(var i = 0; i < 32; i++) {

      if(bytes[i] == 1) {  
        bytes[i] = 0
      }
    
      else {
        bytes[i] = 1;
      }
        
    }

  return bytes;
 
};


Morse.addOneToBinary = function(bytes) {

  for(var i = 31; i >= 0; i--) {
    
    if (bytes[i] == 1) {
      bytes[i] = 0;
    }
    
    else if (bytes[i] == 0) {
      bytes[i] = 1;
      break;
    }

  }

  return bytes;

};

// swap binary value with letter for easier search

Morse.reverseAlpha = function() {
  
  for(var key in this.alpha) {
    var value = this.alpha[key];
    this.alpha[value] = key;
    // and delete old values
    delete this.alpha[key];    
  }
  if (Morse.isReversedAlpha == "encode"){
    Morse.isReversedAlpha = "decode";
  }
  else {
    Morse.isReversedAlpha = "encode";
  }
  

};

Morse.isReversedAlpha = "encode";
Morse.alpha = {
  'A': '10111',
  'B': '111010101',
  'C': '11101011101',
  'D': '1110101',
  'E': '1',
  'F': '101011101',
  'G': '111011101',
  'H': '1010101',
  'I': '101',
  'J': '1011101110111',
  'K': '111010111',
  'L': '101110101',
  'M': '1110111',
  'N': '11101',
  'O': '11101110111',
  'P': '10111011101',
  'Q': '1110111010111',
  'R': '1011101',
  'S': '10101',
  'T': '111',
  'U': '1010111',
  'V': '101010111',
  'W': '101110111',
  'X': '11101010111',
  'Y': '1110101110111',
  'Z': '11101110101',
  '0': '1110111011101110111',
  '1': '10111011101110111',
  '2': '101011101110111',
  '3': '1010101110111',
  '4': '10101010111',
  '5': '101010101',
  '6': '11101010101',
  '7': '1110111010101',
  '8': '111011101110101',
  '9': '11101110111011101',
  '.': '10111010111010111',
  ',': '1110111010101110111',
  '?': '101011101110101',
  "'": '1011101110111011101',
  '!': '1110101110101110111',
  '/': '1110101011101',
  '(': '111010111011101',
  ')': '1110101110111010111',
  '&': '10111010101',
  ':': '11101110111010101',
  ';': '11101011101011101',
  '=': '1110101010111',
  '+': '1011101011101',
  '-': '111010101010111',
  '_': '10101110111010111',
  '"': '101110101011101',
  '$': '10101011101010111',
  '@': '10111011101011101',
  ' ': '0' // Technically is 7 0-bits, but we assume that a space will always be between two other characters
};

