// return masked string
function maskify(cc) {
    var masked = Array.from(cc)
    for (i = 0; i < (masked.length - 4); i++) {
        masked[i] = '#'
    }
    return masked.join("");
}