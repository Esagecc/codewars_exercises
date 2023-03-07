// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // your code
    let long = s1.concat(s2);
    let uniqueChars = [...new Set(long)];
    let longestString = uniqueChars.sort()
    return longestString.join('')
    }

//I had to do a lot of googling to figure this one out. I first google how combine two string and I added .concat() and then how to remove repeative characters which I used the [...new Set()]. Then I noticed the new string were in alphabetical order and I used .sort(). I first tested the code and it came back with the string seperate with a comma. I then used .join('') to combine the strings. I am proud that I did not give up and look at the solution. I know I can write the code more simpler. 

const longestStr = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//I am taking a note of this shorter code. 3/5/2023