class HashTable {
  constructor(size = 3) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let primeNum = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * primeNum + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [[key, value]];
    } else {
      this.keyMap[index].push([key, value]);
    }
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let item of this.keyMap[index]) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }

    return false;
  }
  getKeys() {
    let keysArray = [];

    for (let item of this.keyMap) {
      if (item) {
        for (let value of item) {
          if (!keysArray.includes(value[0])) {
            keysArray.push(value[0]);
          }
        }
      }
    }
    return keysArray;
  }

  getValues() {
    let valuesArray = [];
    for (let item of this.keyMap) {
      if (item) {
        for (let value of item) {
          // we can also use the includes method
          if (!valuesArray.find((val) => val === value[1])) {
            valuesArray.push(value[1]);
          }
        }
      }
    }

    return valuesArray;
  }
}

const ht = new HashTable();
ht.set("rutvik", 90);
ht.set("sanket", 130);
ht.set("sanketqqq", 46);
ht.set("rahul", 92);
ht.set("dimple", 22110);
ht.set("rahul", 92);
ht.set("dimple", 22110);

// console.log(ht.keyMap);
console.log(ht.getKeys());
