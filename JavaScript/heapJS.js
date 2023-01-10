/* 
heap Data structure
//complete binary tree
//heap is a specialized tree based data structure
J.W.J Williams in 1964
//heap sort
one efficient implementation of priority queue
root

binary heap - 
1- Shape property - complete binary tree
2- Heap property

//if the index of an ele,ent in the array is i , the element in the index 2i+1 will become the left child,and the elemnt in the 2i+2 index will become the right child,
also,the parent of nay element at index i is given by the lowe rbound of (i-1)/2


*/

function BinaryHeap(){
    let list = [];

    this.heapify = (arr,n,i) =>{
        let largest = i;
        let  l = 2*i+1; //left and right child index
        let r = 2*i+2;

        //if left child is smaller than root
        if(l<n && arr[l]<arr[largest]){
            largest = l;

        }

        if(r<n && arr[r]<arr[largest]){
            largest =r;
        }

        //if smallest is not the root

        if(largest != i){
            let t = arr[i];
            arr[i] = arr[largest];
            arr[largest] =t;

            //recursively heaoify the affected sub tree

            this.heapify(arr,n,largest);
        }

    }

    this.insert=(num)=>{
        const size = list.length;
        if(size==0){
            list.push(num);
        }
        else{
            list.push(num);

            for(let i = parseInt(list.length/2-1);i>=0;i--)
        {
            this.heapify(list,list.length,i);
        }
        }
    }

    this.delete = (num) =>{
        const size = list.length;
        //get the index of the number that you have to remove

        let i;
        for(i=0;i<size;i++){
            if(num === list[i]){
                break;
            }
        }

        //swap the number
        [list[i],list[size-1]] = [list[size-1],list[i]];

        //remove
        list.splice(size-1);

        //heapify

        for(let i = parseInt(list.length/2-1);i>=0;i--)
        {
            this.heapify(list,list.length,i);
        }
    }

    this.getList = () => list;
}

//heapify
// complete tree , 1st index of a non-leaf node - n/2 - 1


//remove 
//find thew element
//swap the element with the last element
//remove the last element
//heapify the list


const h = new BinaryHeap();
h.insert(3);
h.insert(4);
h.insert(9);
h.insert(5);
h.insert(2);

console.log(h.getList());

h.delete(9);
console.log(h.getList());