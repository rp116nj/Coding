// // --- Directions
// // Check to see if two provided strings are anagrams of eachother.
// // One string is an anagram of another if it uses the same characters
// // in the same quantity. Only consider characters, not spaces
// // or punctuation.  Consider capital letters to be the same as lower case
// // --- Examples
// //   anagrams('rail safety', 'fairy tales') --> True
// //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// //   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let strA = stringA.replace(/[^\w]/g,"").toLowerCase();
//   // console.log(strA);
//   let strB = stringB.replace(/[^\w]/g,"").toLowerCase();
//   // console.log(strB);
//   let objA = strToObj(strA);
//   let objB = strToObj(strB);
//   // console.log("object A :",objA);
//   // console.log("object B :",objB);
//   // comparing the objects
//   let keysA = Object.keys(objA);
//   let keysB = Object.keys(objB);
//    if (keysA.length !== keysB.length)
//       return false;
//     for( let key in objA){
//       if(objA[key] !== objB[key])
//         return false;
//     }
//   return true ;
// }
// //anagrams('RAIL! SAFETY!', 'fairy tales');
// anagrams('Hi there', 'Bye there');
// //converting string to object
// function strToObj(str){
//   let chars={};
//   for(let char of str){
//     if(chars[char])
//     chars[char]++;
//     else
//     chars[char] = 1;
//   }
//   return chars;
// }

function anagrams(stringA, stringB) {
  return (helper(stringA) === helper(stringB));

}
function helper(str){
  let newStr = str.replace(/[^\w]/g,"").toLowerCase();
  // to sort it we make this into an array
  newStr = newStr.split('').sort().join('');
  return newStr;
}

// anagrams('RAIL! SAFETY!', 'fairy tales');
 anagrams('Hi there', 'Bye there');