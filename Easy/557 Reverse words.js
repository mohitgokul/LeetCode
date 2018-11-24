/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) 
{
    var result = [];
    
    s = s.split(" ");    
    s.forEach(word =>
            {
                 var reversedWord = reverseWord(word);
                 result.push(reversedWord);
            })
    
    return result.join(" ");
};

var reverseWord = function(word) {
    let reverse = "";
    for (let i = word.length-1; i>=0 ; i--)
        {
            reverse += word[i];
        }
    return reverse;
};
