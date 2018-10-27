// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArr = str.split(' ');
   //console.log (strArr);
   let newStr =[];
   for ( let word of strArr){
    //  console.log(word);
     let newWord =  word[0].toUpperCase().concat(word.slice(1));
     //console.log(newWord);
      newStr.push(newWord);
        }
   
   return newStr.join(' ');
}

// capitalize('a lazy fox');
capitalize('look, it is working!');