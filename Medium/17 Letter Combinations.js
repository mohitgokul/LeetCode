/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) 
{
    const map = 
          {
             '2': ['a', 'b', 'c'],
             '3': ['d', 'e', 'f'],
             '4': ['g', 'h', 'i'],
             '5': ['j', 'k', 'l'],
             '6': ['m', 'n', 'o'],
             '7': ['p', 'q', 'r', 's'],
             '8': ['t', 'u', 'v'],
             '9': ['w', 'x', 'y', 'z']
          };
    
    if (digits == 0)
        return [];
    
    if( digits.length === 1)
        {
            return map[digits];
        }
    
    let result = [];
    let set1 = letterCombinations(digits.substr(0,1));
    let set2 = letterCombinations(digits.substr(1));
    
    for(i= 0; i<set1.length; i++) {
            for(j=0; j<set2.length; j++)
                {
                    result.push(set1[i]+set2[j]);
                }
            
        }
    return result;
    
};
