How To find the second-largest value in the array.

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const arr = [3, 6, 1, 7, 9, 4, 2, 8];
const secondLargest = findSecondLargest(arr);
console.log('Second largest value:', secondLargest); // Output: 8
