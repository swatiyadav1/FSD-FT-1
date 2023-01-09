function Node(element){
    this.element = element;
    this.next=null;
}


function LList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.findPrevious=findPrevious;
    this.remove = remove;
    this.display = display;
}

function find(item){
var currNode = this.head;
while(currNode.element != item){
    currNode = currNode.next;
}
return currNode;
}

function insert(newElement,item){
    var newNode = new Node(newElement);
var current = this.find(item);
newNode.next = current.next;
current.next = newNode;
}

function findPrevious(item){
var currNode = this.head;
while(!(currNode.next == null) && (currNode.next.element != item)){
    currNode = currNode.next;
}
return currNode;
}

function remove(item){
    var prevNode = this.findPrevious(item);
    if(!(prevNode.next == null)){
        prevNode.next = prevNode.next.next;
    }
}

function display(){
    var currNode  = this.head;
    while(!(currNode.next == null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}


var c =  new LList();
c.insert("A","head");
c.insert("B","A");
c.insert("C","B");

c.display();

console.log("remlove B");


c.remove("B");


console.log("after remopving");
c.display();