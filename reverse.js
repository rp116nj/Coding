/ --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str){
  let reversed ='';
  for (let character of str){// if 'in' is used the index is taken not the specific character
    reversed = character + reversed;
  }
  return reversed;
}
console.log(reverse("apple"));

//another way
function reverse(str){
  let reversed = '';
  let charArray = str.split('');//splits the string into a array of 1 character each
  //console.log(charArray);
  reversed = charArray.reverse().join('');// uses array.reverse() and array.join()
  return reversed;
}
reverse('hello');
