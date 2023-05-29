//The code is taking a word as an input and reversing it. The reversed word is compared with the original to see if it matches. The code will return true or false depending on it. 

function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
    // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}


/* 
  Add your pseudocode here
// reverse the input string
  // if the reversed string is the same as the input
  //   return true
  // else
  //   return false
*/

/*
  Add written explanation of your solution here
  The code will take a string as an input of a potential palindrome. The string is split into an array of characters.
  This array is reversed, joined, and then assigned to a new varaible reversedWord to compare with word
  If the comparision of both variables returns true, return true. If not, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;
