function positiveSum(arr) {
    var newArray = [];
    if (arr.length == 0) {
    return 0;
    } else {
        arr.forEach(function(num){
        if (num > 0) {
          newArray.push(num);
        } else {
          newArray.push(0);
        }
      })
    const sum =  newArray.reduce((result,number)=> result+number);
    return sum;
    }
  }

  function positiveSum(arr) {
    var sum = 0;
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
    return sum; 
   
    }