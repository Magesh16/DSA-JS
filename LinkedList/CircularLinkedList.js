class Node{
    constructor(val){
        this.val = val;
        this.next =null;
    }
}

class CircularLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    getSize(){
        return this.size;
    }
    prepend(val){
        const node = new Node(val);
        if(this.isEmpty()){
            node.next = node;
            this.head = node;
            this.tail =node;
        }else{
            node.next = this.head;
            this.tail.next =node;
            this.head =node;
        }
        this.size++;
    }
    print(){
        let tempNode =this.head;
        let listValues='';
        do{
            listValues+=`${tempNode.val} `;
            tempNode =tempNode.next;
        }while(tempNode != this.head)
        console.log(listValues);
    }
}

const Circularlist = new CircularLinkedList();
// console.log(Circularlist.isEmpty());
// console.log(Circularlist.getSize());
Circularlist.prepend(10);
Circularlist.prepend(20);
Circularlist.prepend(30);
Circularlist.print();
