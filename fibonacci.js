// Iterative loop returning an array

function fibs(num) {
  const array = [0, 1];
  if (num === 0) return [];
  if (num === 1) return [array[0]];

  for (let i = 2; i < num; i++) {
    let fib = array[i - 1] + array[i - 2];
    array.push(fib);
  }
  return array;
}

function fibsRec(num, array = [0, 1]) {
  if (num == 0) return [];
  if (num == 1) return [array[0]];
  if (num == 2) return array;
  array.push(array[array.length - 2] + array[array.length - 1]);
  return fibsRec(num - 1, array);
}

console.log(fibsRec(8));
