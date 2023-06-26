class Node{
    constructor(val){
        this.val =val;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head =null;
        this.tail =null;
        this.size = 0;
    }
    isEmpty(){
        return this.size ==0;
    }

    getSize(){
        return this.size;
    }

    prepend(val){
        const node =new Node(val);
        if(this.isEmpty()){
            this.head = node;
            this.tail =node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        else{
            let val = this.head.val;
            this.head = this.head.next;
            this.size--;
            return val;
        }
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        let val = this.tail.val;
        if(this.size==1){
            this.head =null;
            this.tail =null;
        }
        else{
            let prev = this.head;
            while(prev.next!=this.tail){
                prev =prev.next;
            }
            prev.next =null;
            this.tail = prev;
        }
        this.size--;
        return val;
    }

    print(){
        
        if(this.isEmpty()){
            console.log("The List is Empty");
        }
        
        else{
            let tempNode =this.head;
            let listValues='';
            while(tempNode){
                listValues+=`${tempNode.val} `;
                tempNode =tempNode.next;
            }
            console.log(listValues);
        }
    }

}

const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize())
// list.append(10);
// list.prepend(5);
// list.append(20);
// list.append(30);
// list.removeFromEnd();
// list.print();
// list.removeFromFront();
// list.print()
// console.log(list.getSize())

export default LinkedList;