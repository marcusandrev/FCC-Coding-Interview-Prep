/*

Find the Longest Word in a String


Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWordLength(str) {
  
    var check = str.split(" ");
    var par = 0;
  
    for (let i = 0; i < check.length; i++) {
      if (check[i].length > par) {
        par = check[i].length
      }
    }
    return par;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
