/*

Title Case a Sentence


Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/

function titleCase(str) {
  
    var abc = str.toLowerCase().split(' ');
    var def = [ ];
    
    for (let i=0; i<abc.length; i++) {
       var ghi = abc[i][0].toUpperCase() + abc[i].slice(1);
       def.push(ghi);
     }
    return def.join(' ');

}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");