// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
    return array.reduce((a,b) => a + b, 0) / array.length
  }

  //So basic but it always a great way to practice. 03/30/2023