/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num)
{
    var res = Math.log10(num)/Math.log10(4);
    return (res%1) === 0 ;
};
