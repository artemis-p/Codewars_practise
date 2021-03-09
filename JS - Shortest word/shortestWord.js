// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    const str = s.split(" ");
    
    const arrSorted = str.sort((a, b) => {return a.length - b.length});

    for(let i = 0; i < arrSorted.length; i++) {
        return arrSorted[0].length;
    }
  }