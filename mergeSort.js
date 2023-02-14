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
  // Merge two halves
  let a = 0,
    b = 0,
    c = [];
  for (
    let counter = 0;
    counter < leftHalf.length + rightHalf.length;
    counter++
  ) {
    if (a == leftHalf.length) {
      for (let k = b; k < rightHalf.length; k++) {
        c.push(rightHalf[k]);
      }
      return c;
    }
    if (b == rightHalf.length) {
      for (let k = a; k < leftHalf.length; k++) {
        c.push(leftHalf[k]);
      }
      return c;
    }

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

console.time("Time: ");
let sorted = fn(unsortedArray);
console.log(sorted);
console.timeEnd("Time: ");
