import LinkedList from './LinkedListTail.js';
class LinkedListStack{
    constructor(){
        this.list = new LinkedList();
    }

    push(val){
        return this.list.prepend(val);
    }
    pop(){
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
        return this.list.print();
    }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(40);
stack.push(50);
stack.push(60);
// stack.pop();
console.log(stack.peek());
stack.print();