function findOutlier(integers) {
    var odd;
    var even;
    var counterOdd=0;
    var counterEven=0;
    for (const val of integers) {
        if (val % 2 == 0) {
            even = val;
            console.log("even " + even)
            counterEven++;
        }
        else {
            odd = val;
            console.log("odd " + odd)
            counterOdd++;
        }
    } 
    if (counterEven > counterOdd) {
        return odd;
    }
    else return even;
}