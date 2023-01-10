//implementation of bST


//1st step - create a Node object , passing the data the node will store
//2nd step -check or the root node 
//3rd step - if the node inserted is not the root node,traverse the bst 


/*
1- set the root node to be the current node
2-if the data value in the inserted node is less than the data value in the current node, set the new current node to be the left child of the current node.if the data value is gretae rthan the data value in the current node,
3-if the value of the left child of the current node is null,insert the new node here and exit the loop,otherwise , move to the next iteration
4-set the current node to be the right child of the current node
5-if the value of the right child of the current node is null,insert the new node here and exit, otherwise move to new iteration.
*/

function Node(data,left,right){
    this.data=data;
    this.left = left;
    this.right = right;
    this.show=show;
}
function show(){
    return this.data;
}

function BST(){
    this.root = null;
    this.insert=insert;
    this.inorder = inorder;
    this.getMax = getMax;
    this.getMin = getMin;
    this.find = find;
}
function insert(data){
var n = new Node(data,null,null);
if(this.root == null){
    this.root = n;

}
else{
    var current = this.root;
    var parent;
    while(true){
        parent = current;
        if(data<current.data){
            current = current.left;
            if(current ==  null){
                parent.left = n;
                break;
            }
        }
        else{
            current = current.right;
            if(current == null){
                parent.right = n;
                break;
            }
        }
    }
}
}

/*
traversal function /algorithm 
inorder - visits all the nodes in the ascending order of node key values
preorder - root,left subtree, right subtree
postorder - l,r,right
*/

function inorder(node){
    if(!(node == null)){
        inorder(node.left);
        console.log(node.show()+" ");
        inorder(node.right);
    }
}

function preorder(node){
    if(!(node == null)){
      
        console.log(node.show()+" ");
        preorder(node.left);
        preorder(node.right);
    }
}

function postorder(node){
    if(!(node == null)){
        postorder(node.left);
        postorder(node.right);
        console.log(node.show()+" ");
        
    }
}
/* minimum and maximum value in a bst


*/

function getMin(){
    var current = this.root;
    while(!(current.left == null)){
        current = current.left;
    }
    return current.data;
}
function getMax(){
    var current = this.root;
    while(!(current.right == null)){
        current = current.right;
    }
    return current.data;
}
//for searching a particular value
function find(data){
var current = this.root;
while(current.data != data){
    if(data <current.data){
        current = current.left;
    }
    else{
        current = current.right;
    }
    if(current == null){
        return null;
    }
}
return current;
}

function remove(data){
    root = removeNode(this.root,data);
}
function removeNode(node,data){
    if(node == null){
        return null;
    }
    if(data == node.data){
        //node has no children
        if(node.left == null && node.right == null){
            return null;
        }
        //node has no left child
        if(node.left == null){
            return node.right;

        }
        //node has no right child
        if(node.right == null){
            return node.left;
            
        }

        //node has two children
        var tempNode = getMin(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right,tempNode.data);
        return node;
    }
    else if(data<node.data){
        node.left = removeNode(node.left,data);
        return node;

    }
    else{
        node.right = removeNode(node.right,data);
        return node;
    }
}

var b = new BST();
b.insert(23);
b.insert(45);
b.insert(16);
b.insert(37);
b.insert(3);
b.insert(99);
b.insert(22);
console.log("inorder traversal - ");
inorder(b.root);
console.log("preorder traversal - ");
preorder(b.root);

console.log("postorder traversal");
postorder(b.root);

var min = b.getMin();
console.log("minimum value is  - "+min);

var max= b.getMax();
console.log("maximum value is  - "+max);
var value = 68;
var f  = b.find(value);
if(f != null){
    console.log("found "+value+ " in the bst");
}
else{
console.log(value+ " not found");
}

/*remove node form BST 
1- no childre of the node
2-when there is one child
3- when two children

recursie

remove()
removeNode()

1- check if the node is the one ypu want to delete
2-else, compare the data
3- if less than the current node,move to the left child and compare the data
4- if data is greater than,move to the right child

case 1 -  node removed to be is the leaf, parent node -> null
case 2- has one child,link pointing to the node to be removed has to be adjusted to poiint to the removed node's child node
case 3 ,  the node has two children,choose for the smallest value in the right subtree of the removed node

*/
