/*

Falsy Bouncer


Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

function bouncer(arr) {
  
    var abc = [];
  
    for (let i=0; i<arr.length; i++) {
      if(arr[i]) {
          abc.push(arr[i]);
      }
    }
    return abc;
  }
  
  bouncer([7, "ate", "", false, 9]);
  bouncer([false, null, 0, NaN, undefined, ""]);
  bouncer([null, NaN, 1, 2, undefined]);
  
  //learned that it is possible to check for a truthy value in a variable with a simple conditional.