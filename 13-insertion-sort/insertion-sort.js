function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/// first version - improved below, we can avoid using swap function
// function insertionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i; j >= 0; j--) {
//       if (array[j + 1] < array[j]) {
//         swap(array, j, j + 1);
//       }
//     }
//   }

//   return array;
// }

// without swap
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    for (let j = i; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }

  return array;
}

function insertionSort2(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue; // Insert the currentValue in the correct position
  }

  return array;
}

console.log(insertionSort2([0, 11, 5, 4, 6, 1]));
