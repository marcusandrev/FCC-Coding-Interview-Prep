/*

Confirm the Ending


Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

*/

// Using .endsWith()

function confirmEnding(str, target) {
    return str.endsWith(target);
  }
  
  confirmEnding("Bastian", "n");



  
  // Using JS substrings

  function confirmEnding(str, target) {
  
    return str.slice(str.length - target.length) === target;
    
  }
  
  confirmEnding("Bastian", "n");
  confirmEnding("He has to give me a new name", "name");


