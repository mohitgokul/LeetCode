/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s)
{
    let last = "";
    for( let i = s.length -1; i>=0; i--)
        {
            if (s[i] == " ")
                {
                    if (last != "")
                    break;
                }
            else
                {
                    last += s[i];
                
                }
        }
    return last.length;
};
