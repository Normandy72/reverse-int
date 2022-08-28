module.exports = function reverse (n) {
    let numberToString = n.toString();
    let result = '';

    // solution, if number is negative
    if(numberToString.startsWith('-'))
    {
        for(let i = numberToString.length - 1; i >= 1; i--)
        {
            result = result + numberToString[i];
        }
    }

    // solution, if number ends with 0
    else if(numberToString.endsWith('0'))
    {
        for(let i = numberToString.length - 2; i >= 0; i--)
        {
            result = result + numberToString[i];
        }
    }

    // solution, if number is negative and starts with 0
    else if(numberToString.startsWith('-') && numberToString.endsWith('0'))
    {
        for(let i = numberToString.length - 2; i >= 1; i--)
        {
            result = result + numberToString[i];
        }
    }

    // solution for other numbers
    else
    {
        for(let i = numberToString.length - 1; i >= 0; i--)
        {
            result = result + numberToString[i];
        }
    }

    // convert string in number again
    return Number(result);
}
