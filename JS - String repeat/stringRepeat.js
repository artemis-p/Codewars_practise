function repeatStr(n,s) {
    let repeatedString = '';
    while(n > 0) {
      repeatedString+=s;
      n--;
    }
    return repeatedString;
  }