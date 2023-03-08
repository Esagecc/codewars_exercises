// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let array = numbers.map(x => x * x);
    let result = array.reduce((x, y) => {
      return x + y;
    }, 0);
     return result;
   }
   
//I had to google how to add an array of numbers. I completed first the step to complete square for each number. Then I was not sure which is the best way to add all array numbers and apparently is appears that reduce is the best way. I had to figure out that the sum was 0 at the end. 


function squareSumSimpler(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }

  //for me this solution is sublime. I would trying to remind mylsef to use reduce then the formula to sum the numbers that were squared   03/07/2023