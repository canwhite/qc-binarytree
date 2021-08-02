# qc-binarytree

bianry tree tool

# install
```
yarn add qc-binarytree
or
npm i qc-binarytree
```
# api

  * insert
  * middleOrderTraverse
  * preOrderTraverse
  * postOrderTraverse
  * search
  * min
  * max
  * delete

# use

* front
```
import QCBinaryTree from "qc-binarytree"

let bt = new QCBinaryTree();
bt.insert(35);
bt.insert(44);
bt.insert(90);
bt.insert(45);
bt.insert(100);
bt.insert(2);
console.log("min",bt.min());
console.log("max",bt.max());

bt.middleOrderTraverse((val)=>{
    console.log("val",val);
});
console.log("search",bt.search(45));
console.log("delete",bt.delete(45));
console.log("delete",bt.delete(45));
console.log(JSON.stringify(bt));
```

* Node.js
```
let QCBinaryTree = require("qc-binarytree").default;

let bt = new QCBinaryTree();
bt.insert(35);
bt.insert(44);
bt.insert(90);
bt.insert(45);
bt.insert(100);
bt.insert(2);
console.log("min",bt.min());
console.log("max",bt.max());

bt.middleOrderTraverse((val)=>{
    console.log("val",val);
});
console.log("search",bt.search(45));
console.log("delete",bt.delete(45));
console.log("delete",bt.delete(45));
console.log(JSON.stringify(bt));

```
