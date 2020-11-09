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