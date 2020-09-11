function XO(str) {
    let iO = 0;
    let iX = 0;
    for (i = 0; i < str.length; i++) {
        switch (str.charAt(i).toLowerCase()) {
            case 'o':
                ++iO
                break;
            case 'x':
                iX++
                break;
            default:
        }
    }
    if (iO != iX) {
        return false
    }
    else {
        return true
    }
}