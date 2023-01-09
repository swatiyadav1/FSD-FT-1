/* insertion and deletion from  oth ends
it does not follow FIFO



Insertion at rear end
 1- check if queue is full
 2-if rear = size-1
 - rear = 0

 else
 rear by 1
 
 push arr[rear]=key

 front will remain same


 INSERTION AT THE FRONT -
 1 check if full
 2- if front == 0 ||intial posiiton
 front = size-1

 else , decrement the front by 1
 arr[front]=key

 rear will remain same


 Deletion fron rear
 1-empty or not
 2-if queue has only one element
  front, rear = -1

3 - rear = size-1
else
dec rear by 1

Deletion from front end
1- check if queue is empty
2-one element

3-front=0
4- inc front by 1
  

*/

//using circular queue
let MAX=100;
class Deque{
  constructure(size){
    this.arr=new Array(MAX);
    this.front=-1;
    this.rear=0;
    this.size=size;

  }

  isFull(){
    return ((this.front==0 && this.rear == this.size-1) || this.front == this.rear+1);
  }
  isEmpty(){
    return (this.front == -1);
  }
  insertFront(key){
    if(this.isFull()){
      console.log("Overflow");
      return;

    }
    if(this.front == -1){
      this.front = 0;
      this.rear =0;
    }
    else if(this.front == 0 ){
    this.front =  this.size -1;

    }
    else{
      this.front = this.front - 1;
    }

    this.arr[this.front]=key;
  }

  insertRear(key){
//to code
  }
  deleteRear(){
//to code
  }

  deleteFront(){
    if(this.isEmpty()){
      console.log("underflow");
      return;
    }
    if(this.front == this.rear){
      this.front = -1;
      this.rear =-1;
    }

    else{
      if(this.front == this.size-1)
      {
        this.front = 0;
      }
      else{
        this.front = this.front+1;
      }
    }
  }

  getFront(){
    if(this.isEmpty()){
      console.log("underflow");
      return;
    }
    return this.arr[this.front];

  }
  getRear(){

    if(this.isEmpty() || this.rear<0){
      console.log("underflow");
      return;
    }
    return this.arr[this.rear];
  }
  
}

let d = new Deque();


d.insertFront(15);

d.insertFront(25);

d.insertFront(35);

d.insertFront(45);

d.insertFront(55);


d.deleteFront();