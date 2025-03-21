function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) return i;
  }
  return -1;
}

// Big O of the linear search is O(n) because the time complexity grows linearly with the size of the input data.
// Best: O(1)  ||  Worst: O(n)  ||  Average: O(n)

function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (array[middle] !== value && left <= right) {
    if (value > array[middle]) left = middle + 1;
    else if (value < array[middle]) right = middle - 1;

    middle = Math.floor((left + right) / 2);
  }

  return array[middle] === value ? middle : -1;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(array, 21));
