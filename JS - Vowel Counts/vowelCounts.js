// Return the number (count) of vowels in the given string

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
  
    var newStr = str.split("");
   
    for(var i = 0; i < newStr.length; i++){
      for (var j = 0; j < vowels.length; j++) {
        if (newStr[i] == vowels[i])
          vowelsCount +=1;
      }
    }
  return vowelsCount;
  }