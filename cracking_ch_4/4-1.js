let routeBetweenNodes = (node1, node2) => {
  let q = [];
  let seen = new Set();
  q.push({node: node1, depth: 0});
  seen.add(node1);
  
  while (q.length) {
    let current = q.shift();

    if (current.node === node2) {
      return true;
    }

    for (let i of current.node.edges) {
      if (!seen.has(i)) {
        q.push({node: i, depth: current.depth + 1});
        seen.add(i);
      }
    }

  }
  return false;
}

class Graph {
  constructor() {
    this.nodes = [];
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.edges = [];
  }
}

let graph = new Graph();
let first = new Node(0);
let second = new Node(1);
let third = new Node(2);
let fourth = new Node(3);

first.edges.push(second);
second.edges.push(third);
third.edges.push(first);
third.edges.push(first);
fourth.edges.push(third);

graph.nodes.push(first);
graph.nodes.push(second);
graph.nodes.push(third);
graph.nodes.push(fourth);

console.log(routeBetweenNodes(first, third));