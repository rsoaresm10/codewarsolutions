/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
    const n = ending.length;
  
    if (n === 0) {
      return true;
    }
  
    const strEnding = str.slice(-n);
  
    if (strEnding === ending) {
      return true;
    } else {
      return false;
    }
  }