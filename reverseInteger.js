// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(num){
//all these methods work only on strings. hence converting to string
  revNum = String(num).split('').reverse().join('');//converting the number to string, splitting ,reversing and joining 
  return parseInt(revNum)* Math.sign(num);
}

reverseInt(15);
