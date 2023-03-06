// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.


function move (position, roll) {
    // return the new position
        return position + roll * 2

  }

  //Despite of being so simple, I had to think about it. Then it hit me that it was a simple math problem. I got it right on my first attempt. 03/05/2023