/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num)
{
    if(!num)
        return 0;
    else
        return num % 9 || 9;
};
