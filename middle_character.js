// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  //Code goes here!
  let position = (s.length / 2)
  
  if (s.length % 2 == 0) {
     return s.charAt(position - 1) + s.charAt(position)

  } else {
    return s.charAt(position)
  }

}

//I'm proud to have figure this out with minimal googling. I needed to figure out how to find a character in the string and that is why I used charAt(). I first needed to find out how to identify the middle character. Then I needed to seperate the even number words from odd number words. With the if else formula. 

function getMiddleTwo(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

//I like this verson of figure it out. I would review how to use slice in the next exercise. 03/13/2023