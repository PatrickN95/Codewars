function getSum(a, b) {
    var sum = 0;
    if (a > b) {
        b = [a, a = b][0];
    }
    for (i = a; i <= b; i++) {
        sum += i
    }
    return sum
}