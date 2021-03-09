// 

function filter_list(l) {
    var newArray = []
    for (var i = 0; i < l.length; i++) {
      if (typeof l[i] === "number") {
        newArray.push(l[i]);
      }
    }
    return newArray;
  }