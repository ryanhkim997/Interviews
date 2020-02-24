var find

let Node = function(val) {
  this.val = val;
  this.next = null;
}

let LinkedList = function() {
  this.head = null;
}

LinkedList.prototype.addToHead = function(val) {
  let newNode = new Node(val);

  if (this.head) {
    newNode.next = this.head; 
  }
  this.head = newNode;
}

let list = new LinkedList();