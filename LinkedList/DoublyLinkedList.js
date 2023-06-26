class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size =0;
    }

    isEmpty(){
        return this.size==0;
    }
    getSize(){
        return this.size;
    }
    prepend(val){
        let node = new Node(val);
        if(this.isEmpty()){
            this.head = node;
            this.tail =node;
        }else{
            node.next =this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    append(val){
        let node = new Node(val);
        if(this.isEmpty()){
            this.head =node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail =node;
        }
        this.size++;
    }
    insertAnyIndex(val, index){
        const node = new Node(val);
        let tempNode = this.head;
        for(let i=0;i<index-1;i++){
            tempNode =tempNode.next;
        }
        tempNode.next= node;
        node.prev = tempNode;
        for(let i=this.size;i>index+1;i--){
            this.tail = this.tail.prev;
        }
        node.next = this.tail;
        this.tail.prev = node;
        this.size++;
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        let removedVal = this.head.val;
        this.head = this.head.next;
        this.size--;
        return removedVal;
    }   
    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        let removedVal = this.tail.val;
        if(this.size==1){
            this.head=null;
            this.tail = null;
        }
        else{
            removedVal = this.tail.val;
            this.tail = this.tail.prev;
            this.tail.next =null;
        }
        this.size--;
        return removedVal;
    }

    reversePrint(){
        let listValue='';
        let tempNode = this.tail;
        while(tempNode){
            listValue +=`${tempNode.val} `;
            tempNode = tempNode.prev;
        }
        console.log(listValue);
    }

    print(){
        if(this.isEmpty()){
            console.log("Doubly List is Empty");
        }else{
            let tempNode = this.head;
            let listValues = '';
            while(tempNode){
                listValues+=`${tempNode.val} `;
                tempNode =tempNode.next;
            }
            console.log(listValues);
        }
        
    }
}

const Doublylist = new DoublyLinkedList();
Doublylist.prepend(10);
Doublylist.append(20);
Doublylist.append(30);
Doublylist.prepend(5);
Doublylist.insertAnyIndex(25,3);
console.log(Doublylist.removeFromEnd());
Doublylist.print();
Doublylist.reversePrint();
