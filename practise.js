// function hello() {
//     var s="Hi there!";
//     console.log(s);
// }
// hello();

const solution = (arr) => {
    var counter = 0;
    var visitedElements = 1
    var level = 1
    while (counter < arr.length) {
        console.log(counter, arr[counter]);
        

        if (visitedElements > 1){
            if (visitedElements < Math.log2(level)) {

            }


        }
        visitedElements += 1
        counter += 1
    }
};

solution([3,6,2,9,-1,10])



if (level == 0) {
    return arr[0]
} else if (level == 1) {
    return arr[1,2]
} else {
    for (var i = 2; i<n; i++) {
        return n**2 + (n-1)**2
    }
}


function shapeArea(n) {
    var area = 0;
    if (n==1) {
        return 1;
    } else {
       for (var i=2; i<=n; i++) {
        return area = n**2 + (n-1)**2; 
        }
    }
}