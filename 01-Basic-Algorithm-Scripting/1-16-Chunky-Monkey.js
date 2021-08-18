/*

Chunky Monkey


Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {
  
    var abc = [];
    var index = 0;
    
    while (index < arr.length){
      abc.push(arr.slice(index, index+size));
      index += size;
    }
    
    return abc;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);