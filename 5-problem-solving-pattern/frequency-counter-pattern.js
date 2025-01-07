// A function takes 2 arrays as input, the second array should have all the elements from first array but squared
// [1,2,3] => [9,4,1] | [2,4,6] => [16,36,4] | [1,2,1] => [1,1,4]

let array1 = [1, 1, 3];
let array2 = [1, 9];

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

console.log(same1(array1, array2));

function frequencyCounter(arr1, arr2) {}
