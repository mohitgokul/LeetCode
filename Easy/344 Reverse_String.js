/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s)
{
    let reverse = "";
    for (let i = s.length -1; i>=0 ; i--)
        {
            reverse += s[i];
        }
    return reverse;
};
