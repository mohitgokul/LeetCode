var reverseVowels = function(s) {
    let array = s.split("");
    let i = 0, j = array.length - 1;
    const vowels= ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    while(i < j){
        while(i < j && vowels.indexOf(array[i]) < 0) {
            i++;
        }
        while(i< j && vowels.indexOf(array[j]) < 0) {
            j--;
        }
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
        i++;
        j--;
    }
    
    let result = "";
    for(let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
};
