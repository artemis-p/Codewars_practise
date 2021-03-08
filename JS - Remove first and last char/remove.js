// create a function that removes the first and last characters of a string.

function removeChar(str){
    var newStr = str.split("");
    var removeChar = newStr.slice(1, newStr.length - 1);
  
    return removeChar.join("");
  };

  function removeChar(str){
    var newStr = str.substring(1, str.length - 1);
     return newStr;
   };