//Given 2 strings, wrrite a fun to determine if the second string is an anagram of the first.
// An anagram is a word or name formed by rearranging the letters of another, such as cine,a formed from iceman

function anagramChecker(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let char of string1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }
  for (let char of string2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }

    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagramChecker("hell", "leh"));
