// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    // Your code here
   let splitStr = str.split('')
    let duplicate = splitStr.map(c => c + c)
    return duplicate.join('');
  }


const doubleCharTwo = (str) => str.split("").map(c => c + c).join("");

//This exercise was complicated because I had to google the example. I moslty go the double the string concat together instead of adding two characters together. I tried using repeat(), forEach(), and the worst one was 

//int l = stng.length();
// String newstring = "";
// for (int i = 0; i < l; i++) 
// {
//   newstring += stng.substring(i,i+1) + stng.substring(i, i+1);
// }
// return newstring;

//I had to look into the solution and I did not know why I did not consider the .map(),
//At least I see how map can be use. 