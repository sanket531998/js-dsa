// A function takes 2 arrays as input, the second array should have all the elements from first array but squared
// [1,2,3] => [9,4,1] | [2,4,6] => [16,36,4] | [1,2,1] => [1,1,4]

let array1 = [1, 1, 3];
let array2 = [1, 9, 1];

// traditional for loop approach
function same1(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let val of array1) {
    let correctIndex = array2.indexOf(val ** 2);

    if (correctIndex !== -1) {
      array2.splice(correctIndex, 1);
    } else {
      return false;
    }
  }
  return true;
}

function frequencyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(frequencyCounter(array1, array2));
