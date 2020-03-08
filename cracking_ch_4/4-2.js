let findMinimalTree = (arr) => {
  let mid = Math.floor(arr.length / 2);
  let root = new Node(arr[mid]);
  if (arr.length <= 1) {
    return new Node(arr[0]);
  }

  root.left = findMinimalTree(arr.slice(0, mid));
  root.right = findMinimalTree(arr.slice(mid + 1, arr.length));
  return root;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

console.log(findMinimalTree([1,2,3,4,5,6,7]));