/*

Diff Two Arrays


Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

*/

function diffArray(arr1, arr2) {
  var newArr = [];

  function sample(a, b) {
    for (var i = 0; i < b.length; i++) {
      if (a.includes(b[i]) === false) {
        newArr.push(b[i]);
      }
    }
  }
  sample(arr1, arr2);
  sample(arr2, arr1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
