function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const arr = [3, 6, 1, 7, 9, 4, 2, 8];
const max = findMax(arr);
const min = findMin(arr);
console.log('Max:', max); // Output: 9
console.log('Min:', min); // Output: 1
