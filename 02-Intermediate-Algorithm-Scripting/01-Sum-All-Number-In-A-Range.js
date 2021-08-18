/*

Sum All Numbers in a Range


We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/

function sumAll(arr) {
  
    var abc = arr.sort(function(a, b){return a-b});
    var total = 0;
    
    for (let i=abc[0]; i < abc[1] + 1; i++) {
        total += i
    }
    return total;
  }
  
  sumAll([1, 4]);
  sumAll([10, 5]);
  sumAll([4, 1]);