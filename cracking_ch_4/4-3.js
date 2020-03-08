let createListOfDepths = (tree) => {
  let q = [{node: tree, depth: 0}];
  let seen = new Set();
  let prev = 0;
  let tracker = new LinkedListNode(tree.val);

  while (q.length) {
    let current = q.shift();
    if (!seen.has(current)) {
      seen.add(current);
      if (!prev || current.depth > prev) {
        prev = current.depth;
        tracker = new LinkedListNode(current.node.val);
      } else {
        tracker.next = new LinkedListNode(current.node.val);
        tracker = tracker.next;
      }
      current.node.left ? q.push({node: current.node.left, depth: current.depth + 1}) : null;
      current.node.right ? q.push({node: current.node.right, depth: current.depth + 1}) : null;
    }

  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var biTree = new Node(2);

biTree.left = new Node(4);
biTree.right = new Node(6);

biTree.left.left = new Node(8);
biTree.left.right = new Node(9);
biTree.right.right = new Node(10);
biTree.right.left = new Node(11);

console.log(createListOfDepths(biTree));