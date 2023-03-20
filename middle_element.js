// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

function gimmeWrong(triplet) {

    return triplet.indexof(triplet.sort((a, b) => b - a))
    
    }

//I needed to google this exercise to figure it out. I was able to first find the position of numbers in the array with indexOf(). However I noticed that I didn't capitalized the Of so it was not working. Then I was learning how to sort out the array. I learend to avoid the just .sort() with numbers. Instead I learned to use this function formula numbers.sort((a,b) => a - b). However, despite of the two searches, I could not solve the code. I end up looking up the solution and I see that I was missing the a.concat(). 

function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

//After reviewing the solution, I learned that concat(), will not modified the position of the sort array because the concat is a copied array. the indexOf()is searching the middle element number's first array position. It was very enlighting to learn. 03/19/2023