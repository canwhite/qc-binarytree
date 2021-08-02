function QCBinaryTree() {
  var Node = function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  };

  this.root = null;

  var insertNode = function insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  this.insert = function (val) {
    var newNode = new Node(val);

    if (this.root == null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  };

  var middleOrderTraverseNode = function middleOrderTraverseNode(node, callback) {
    if (node != null && node != undefined) {
      middleOrderTraverseNode(node.left, callback);
      callback(node.value);
      middleOrderTraverseNode(node.right, callback);
    }
  };

  this.middleOrderTraverse = function (callback) {
    middleOrderTraverseNode(this.root, callback);
  };

  var preOrderTraverseNode = function preOrderTraverseNode(node, callback) {
    if (node !== null && node !== undefined) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(this.root, callback);
  };

  var postOrderTraverseNode = function postOrderTraverseNode(node, callback) {
    if (node !== null && node !== undefined) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(this.root, callback);
  };

  var searchNode = function searchNode(node, val) {
    if (node != null && node != undefined) {
      if (val < node.value) {
        return searchNode(node.left, val);
      } else if (val > node.value) {
        return searchNode(node.right, val);
      } else {
        return node;
      }
    } else {
      return false;
    }
  };

  this.search = function (val) {
    return searchNode(this.root, val);
  };

  var minNode = function minNode(node) {
    if (node == null) {
      return null;
    }

    if (node.left == null) {
      return node.value;
    } else {
      return minNode(node.left);
    }
  };

  this.min = function () {
    return minNode(this.root);
  };

  var maxNode = function maxNode(node) {
    if (node) {
      if (node.right) {
        return maxNode(node.right);
      } else {
        return node.value;
      }
    }
  };

  this.max = function () {
    return maxNode(this.root);
  };

  var findMinNode = function findMinNode(node) {
    if (node) {
      while (node.left) {
        node = node.left;
      }

      return node;
    }

    return null;
  };

  var deleteNode = function deleteNode(node, val) {
    if (node != null || node != undefined) {
      if (val < node.value) {
        return deleteNode(node.left, val);
      } else if (val > node.value) {
        return deleteNode(node.right, val);
      } else {
        if (node.left == null && node.right == null) {
          node.value = null;
          return true;
        }

        if (node.left == null) {
          node = node.right;
          return true;
        } else if (node.right == null) {
          node = node.left;
          return true;
        }

        var aux = findMinNode(node.right);
        node.value = aux.value;
        return deleteNode(node.right, aux.value);
      }
    } else {
      return false;
    }
  };

  this["delete"] = function (val) {
    return deleteNode(this.root, val);
  };
}

export default QCBinaryTree;
/* 
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
console.log(JSON.stringify(bt)); */