class Node {
  data;
  left;
  right;
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  arr = [];
  start;
  root;
  end;
  constructor(arr) {
    this.arr = arr;
    this.root = new Node(null);
    this.start = 0;
    this.end = arr.length;
  }

  buildTree(start, end) {
    if (start > end) return null;
    let mid = start + Math.floor((end - start) / 2);

    let root = new Node(this.arr[mid]);

    root.left = this.buildTree(start, mid - 1);
    root.right = this.buildTree(mid + 1, end);
    this.root = root;
    return root;
  }

  insert(value) {
    let newNode = new Node(value);

    let temp = new Node();
    temp = this.root;
    while (temp) {
      if (temp.data > value) {
        if (temp.left) temp = temp.left;
        else {
          temp.left = newNode;
          return;
        }
      } else if (temp.data < value) {
        if (temp.right) temp = temp.right;
        else {
          temp.right = newNode;
          return;
        }
      }
    }
  }

  getSuccessor(curr){
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
        curr = curr.left;
    }
    return curr;
  }

  deleteNode(root, val)
  {
    if(root == null)
      return root;

    if(root.data > val)
    {
      root.left = this.deleteNode(root.left, val);
    }
    else if(root.data < val)
    {
      root.right = this.deleteNode(root.right, val);
    }

    else
    {
      if(root.left === null)
        return root.right;

      else if(root.right === null)
        return root.left;


      let succ = this.getSuccessor(root);
      root.data = succ.data;
      root.right = this.deleteNode(root.right, succ.data);
    }

    return root;
  }


  
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let test = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

uniqueT = [...new Set(test)];
uniqueT.sort((a, b) => a - b);
// console.log(uniqueT);
const newBST = new Tree(uniqueT);

let root = newBST.buildTree(0, uniqueT.length);

// console.log(root);

// prettyPrint(root);

newBST.insert(2);

prettyPrint(root);

newBST.deleteNode(root, 67);

prettyPrint(root);
