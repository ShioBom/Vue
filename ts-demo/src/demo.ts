module.exports = function (...rest:Array<number>) {
    var sum = 0;
    for (let n of rest) {
        sum += n;
    }
    return sum;
};