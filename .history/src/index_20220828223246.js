module.exports = function reverse (n) {
    let numberToString = n.toString();
    let result = '';
    for(let i = numberToString.length - 1; i >= 0; i--)
    {
        result = result + numberToString[i];
    }
    return Number(result);
}
