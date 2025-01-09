function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for (let j = 0; j < array.length; j++) {
    let smallestIndex = j;
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[j]) {
        smallestNo = array[i];
        smallestIndex = i;
      }
    }

    if (smallestIndex !== j) {
      // swap(array, j, smallestIndex);
      [array[j], array[smallestIndex]] = [array[smallestIndex], array[j]];
    }
  }

  return array;
}

const sortedArray = selectionSort([-10, 12, 5, 2, 1, 0.2, -1, 13]);
console.log(sortedArray);
