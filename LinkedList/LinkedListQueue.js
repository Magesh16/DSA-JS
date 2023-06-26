import LinkedList  from "./LinkedListTail.js";

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList();
    }

    enQueue(val){
        return this.list.append(val);
    }
    deQueue(){
        return this.list.removeFromFront();
    }
    peek(){
        return this.list.head.val;
    }
    isEmpty(){
        return this.list.isEmpty();
    }
    getSize(){
        return this.list.getSize();
    }
    print(){
        return this.list.print()
    }
}

const Queue = new LinkedListQueue();
Queue.enQueue(10);
Queue.enQueue(20);
Queue.enQueue(30);
Queue.deQueue()
console.log(Queue.peek());
console.log(Queue.getSize());
Queue.print()
