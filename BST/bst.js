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


  find(root, val)
  {
    if(root === null || root.data === val)
      return root;

    if(root.data > val)
    {
     return this.find(root.left, val);
    }

      return this.find(root.right, val);
   
  }

  levelorder(callback)
  {
    if(typeof callback === undefined || typeof callback !== 'function')
    {
      throw new Error('A callback function must be provided');
    }

    const queue = [];
    queue.push(this.root);
    // let temp = new Node();
    // temp = this.root;

    while(queue.length)
    {
      const curr = queue.shift();  
      // console.log(curr);
      callback(curr);
      if(curr.left)
        queue.push(curr.left);
      if(curr.right)
        queue.push(curr.right);
    }
    console.log('\n'); 
  }

  inorder(root, callback)
  {
    if(!root) return;
    
    
      this.inorder(root.left, callback);
      callback(root);
      this.inorder(root.right, callback);
    
  }

  preorder(root, callback)
  {
    if(!root) return;
    
      callback(root);
      this.inorder(root.left, callback);
      this.inorder(root.right, callback);
    
  }  
  
  postorder(root, callback)
  {
    if(!root) return;
    
    
      this.inorder(root.left, callback);
      this.inorder(root.right, callback);
      callback(root);
    
  }

  height(root)
  {
    if(!root) return -1;

    return 1+ Math.max(this.height(root.left), this.height(root.right));
  }

  depth(root, val)
  {
    if(root === null || root.data === val)
      return 0;

    if(root.data > val)
    {
     return 1+this.depth(root.left, val);
    }

      return 1+ this.depth(root.right, val); 
  }

  isBalanced(root)
  {
    if(!root)
      return true;
    let h = this.height(root.left) - this.height(root.right);
    if(!(Math.abs(h) <= 1))
      return false;

    return this.isBalanced(root.left) && this.isBalanced(root.right); 
  
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

console.log(newBST.find(root, 3));

function printNode(currNode) {
  process.stdout.write(currNode.data + '->');
  // console
}

try {
  newBST.levelorder(printNode);
} catch (error) {
  console.log(error);
}
newBST.inorder(root, printNode);
console.log();
newBST.preorder(root, printNode);
console.log();
newBST.postorder(root, printNode);
console.log();
console.log(newBST.height(root));
console.log(newBST.depth(root, 2));
console.log(newBST.isBalanced(root));