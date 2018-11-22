/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n)
{
    var num = new Array();
    for ( let i = 0; i<n; i++)
        {
            if((i+1)%15 == 0)
                {
                   num[i] = "FizzBuzz";
                }
            else if((i+1) % 3 == 0)
                {
                    num[i] = "Fizz";
                }
            else if((i+1) %5 == 0)
                {
                    num[i] =  "Buzz";
                }
            else
            {
                num[i] =(i+1).toString();                
            }
        
        }
    return num;
};
