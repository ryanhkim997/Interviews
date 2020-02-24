var Stack = function() {
  this.storage = {};
  this.size = 0;
}

Stack.prototype.push = function(data) {
  if (!this.size || data < this.storage[this.size].minVal) {
    this.storage[this.size + 1] = { data, minVal: data }
  } else {
    this.storage[this.size + 1] = { data, minVal: this.storage[this.size].minVal }
  }
  this.size++;
  return this.storage;
}

Stack.prototype.pop = function() {
  let popped = this.storage[this.size];
  delete this.storage[this.size];
  this.size--;
  return popped;
}

Stack.prototype.getSize = function() {
  return this.size;
}

Stack.prototype.getMin = function() {
  return this.size ? this.storage[this.size].minVal : null;
}

let stack = new Stack();
console.log(stack.getMin());
console.log(stack.push(2));
console.log(stack.getMin());
console.log(stack.getSize());
console.log(stack.push(3));
console.log(stack.getMin());
console.log(stack.pop());
console.log(stack.push(4));
console.log(stack.getMin());
console.log(stack.push(2));
console.log(stack.getMin());