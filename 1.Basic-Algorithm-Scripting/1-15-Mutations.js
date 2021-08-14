/*

Mutations


Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

*/

function mutation(arr) {
    const uppercased = arr.map(arr => arr.toLowerCase());
  
     for (let i = 0; i < uppercased[1].length; i++) {
      if (uppercased[0].indexOf(uppercased[1][i]) < 0) 
      return false;
    }
    return true;
  
  }
  
  mutation(["hello", "hey"]);  //false
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) //true
  mutation(["Mary", "Army"]) //true
  mutation(["Alien", "line"]) //true
  mutation(["ate", "date"]) //false