// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
function palindrome(string){
  let reversed = '';
  let charArray = string.split('');
  
  reversed = charArray.reverse().join('');
  if (string === reversed){
    return true;
  }
  else {
    return false;
  }
}
palindrome("abba");
palindrome("abcdefg");