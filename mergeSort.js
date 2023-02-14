var unsortedArray = [5, 2, 10, 3, 5, 12, 11, 20];

function fn(array) {
  // Base case
  if (array.length <= 1) return array;

  // Divide the array up into halves recursively until base case is fulfilled
  let leftHalf = fn(array.slice(0, Math.floor(array.length / 2)));
  let rightHalf = fn(array.slice(Math.floor(array.length / 2), array.length));

  return merge(leftHalf, rightHalf);
}

function merge(leftHalf, rightHalf) {
  let a = 0,
    b = 0,
    c = [],
    totalLength = leftHalf.length + rightHalf.length;

  // Loop through the entire array to be sorted
  for (let counter = 0; counter < totalLength; counter++) {
    /*
    If the counter on the left-hand side has reached 
    the end, loop through the remaining numbers on the 
    right and add them to the final array
    */

    if (a == leftHalf.length) {
      for (let k = b; k < rightHalf.length; k++) {
        c.push(rightHalf[k]);
      }
      return c;
    }
    // Repeat for the right-hand side
    if (b == rightHalf.length) {
      for (let k = a; k < leftHalf.length; k++) {
        c.push(leftHalf[k]);
      }
      return c;
    }

    /*
    Continue checking each element in the left vs right array, 
    iterate forward on the side that is found to have an element smaller than the other
    */
    if (leftHalf[a] < rightHalf[b]) {
      c.push(leftHalf[a]);
      a++;
    } else {
      c.push(rightHalf[b]);
      b++;
    }
  }
  return c;
}
