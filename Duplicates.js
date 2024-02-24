function findDuplicates(arr) {
  const duplicates = {};
  const result = [];

  arr.forEach(item => {
    if (duplicates[item] === undefined) {
      duplicates[item] = 1;
    } else {
      duplicates[item]++;
    }
  });

  for (const key in duplicates) {
    if (duplicates[key] > 1) {
      result.push(parseInt(key)); // Convert key back to number if needed
    }
  }

  return result;
}

const arr = [1, 2, 3, 4, 3, 5, 6, 2];
const duplicates = findDuplicates(arr);
console.log('Duplicate elements:', duplicates); // Output: [3, 2]
