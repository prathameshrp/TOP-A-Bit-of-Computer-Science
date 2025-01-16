class Node{
  data;
  left;
  right;
  constructor(val)
  {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Tree{

  arr = [];
  start;
  end;
  constructor(arr)
  {
    this.arr = arr;
    this.root = new Node(null);
    this.start = 0;
    this.end = arr.length;
  }

  buildTree(start, end)
  {
    if(start>end) return null;
   let mid = start + Math.floor((end - start) / 2);
   
    let root = new Node(this.arr[mid]);

    root.left = this.buildTree(start, mid-1);
    root.right = this.buildTree(mid+1, end);

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
uniqueT.sort((a,b)=>a-b);
// console.log(uniqueT);
const newBST = new Tree(uniqueT);

let root = newBST.buildTree(0, uniqueT.length);

// console.log(root);

prettyPrint(root);