function getMiddle(s) {
    var string = ""
    if (s.length % 2 == 0) {
        string += s.charAt(s.length / 2 - 1)
        string += s.charAt(s.length / 2)
    }
    else {
        string += s.charAt(s.length / 2)
    }
    return string

}