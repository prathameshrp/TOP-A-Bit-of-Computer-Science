const {Tree, prettyPrint, printNode} = require('./bst.js');

let min = 0;
let max = 100;

const example = [];

while(example.length != 13)
{
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    if(example.includes(random))
      continue;
    example.push(random);
}
example.sort((a,b)=> a-b);

// console.log(example);

const bst = new Tree(example);

const root = bst.buildTree(0, example.length-1);

prettyPrint(root);

bst.levelorder(printNode);
bst.inorder(root, printNode);
console.log();
console.log(bst.isBalanced(root))

// bst.insert(5);
bst.insert(453);
bst.insert(222);
bst.insert(801);
bst.insert(563);
bst.insert(109);
bst.insert(353);
bst.insert(455);
bst.insert(273);
// console.log("reach");
prettyPrint(root);

console.log(bst.isBalanced(root));

bst.rebalance(root);
prettyPrint(bst.root);
console.log(bst.isBalanced(bst.root));

