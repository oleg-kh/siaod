class HashTable {
  constructor(size = 32) {
    this.storage = new Array(size);
    this.size = size;
  }

  print() {
    console.log(this.storage);
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.storage[index]) {
      this.storage[index] = [];
    }

    this.storage[index].push([key, value]);

    return index;
  }

  get(key) {
    let index = this.hash(key);

    if (!this.storage[index]) return null;
    for (let bucket of this.storage[index]) {
      if (bucket[0] === key) {
        return bucket[1];
      }
    }
  }
  remove(key) {
    let index = this.hash(key);

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }
}

const ht = new HashTable(10);

ht.set('Josh', '100$');
ht.set('Max', '50$');
ht.set('Alex', '200$');
ht.set('Iliot', '10$');
ht.print();
console.log(ht.get('Josh'));
console.log(ht.get('Alex'));
console.log(ht.get('Josh1'));
ht.remove('Alex');
ht.print();
