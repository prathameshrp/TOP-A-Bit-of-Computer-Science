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

const root = bst.buildTree(0, example.length);

prettyPrint(root);

bst.levelorder(printNode);
bst.inorder(root, printNode);