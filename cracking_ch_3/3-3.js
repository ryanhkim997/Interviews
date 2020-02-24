var SetOfStacks = function(capacity) {
  this.storage = {};
  this.size = 0;
  this.capacity = capacity;
}

var Stack = function() {
  this.storage = {};
  this.size = 0;
}

Stack.prototype.push = function(val) {
  this.size++;
  this.storage[this.size] = val;
  return this.size;
}

Stack.prototype.pop = function() {
  if (!this.size) {
    return null;
  }
  let popped = this.storage[this.size];
  delete this.storage[this.size];
  this.size--;
  return popped;
}

SetOfStacks.prototype.push = function(val) {
  if (!this.size || this.storage[this.size].size === this.capacity) {
    this.size++;
    this.storage[this.size] = new Stack();
  }
  this.storage[this.size].push(val);
  return this.size;
}

SetOfStacks.prototype.pop = function() {
  let sizeOfToBePopped = this.storage[this.size].size;
  if (sizeOfToBePopped === 1) {
    let lastInStack = this.storage[this.size].storage[sizeOfToBePopped];
    delete this.storage[this.size];
    this.size--;
    return lastInStack;
  } else {
    let popped = this.storage[this.size].pop();
    this.size--;
    return popped;
  }
}

let newSet = new SetOfStacks(2);
console.log(newSet.push(1));
console.log(newSet.push(2));
console.log(newSet.push(3));
console.log(newSet.storage);
console.log(newSet.pop());
console.log(newSet.storage);
console.log(newSet.pop());
console.log(newSet.storage);