// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length > 0 ) {
      return array.reduce((a,b) => a + b, 0) / array.length
  } else {
    return 0 
  }
  }

  //It was simple until i realized that I needed to find a way to look for empty array to return 0. 03/30/2023
  

  var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }