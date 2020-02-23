let checkPalindrome = (list) => {
  if (!list.head) {
    return false;
  }
  let check = [];
  let current = list.head;
  while (current) {
    check.push(current.val);
    current = current.next;
  }

  let reversed = check.slice().reverse();

  for (let i = 0; i < check.length; i++) {
    if (check[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
}

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
// list.addToHead(1);
// list.addToHead(2);
// list.addToHead(5);
// list.addToHead(5);
// list.addToHead(2);
// list.addToHead(1);
// list.addToHead(3);

console.log(checkPalindrome(list));