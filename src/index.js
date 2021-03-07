module.exports = function reverse (n) {
    let m = 0;
    let string = String(Math.abs(n));
    for (let i = 0; i < string.length; i++) {
        m = m + string[i] * Math.pow(10, i);
    }
    return m;
}

