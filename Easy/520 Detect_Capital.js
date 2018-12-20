/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
   return (word.substr(1).toLowerCase() == word.substr(1) || word.toUpperCase() == word)
};
