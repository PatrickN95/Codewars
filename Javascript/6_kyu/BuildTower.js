function towerBuilder(nFloors) {
    var array = new Array();
    var temp = "";
    for (i = 1; i <= nFloors; i++) {
        temp = "";
        temp += " ".repeat(nFloors - i)
        temp += '*'.repeat(i * 2 - 1);
        temp += " ".repeat(nFloors - i)
        array.push(temp);
    }
    return array
}