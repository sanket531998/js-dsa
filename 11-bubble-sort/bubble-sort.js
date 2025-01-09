function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[i] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

let array = [5, 2, 31, 1];

console.log(bubbleSort(array));
