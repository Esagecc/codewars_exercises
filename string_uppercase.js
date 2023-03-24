// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

String.prototype.isUpperCase = function() {
    // your code here
    return !/[a-z]/.test(this);
  }

//I needed to look for the solution. I was missing 'this'. 03/23/2023

//Another option. 

String.prototype.isUpperCaseToo=function() {return this==this.toUpperCase()}
