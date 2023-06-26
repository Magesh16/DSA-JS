class Node{
    constructor(val){
        this.val = val;
        this.next =null;
    }
}
class LinkedList{
    constructor(){
        this.head =null;
        this.size = 0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }
    prepend(val){
        const node  = new Node(val);
        if(this.isEmpty()){
            this.head = node;
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
        }else{
            let tempNode = this.head;
            while(tempNode.next){
                tempNode = tempNode.next;
            }
            tempNode.next = node;
        }
        this.size++;
    }
    insertAnyIndex(val,index){
        if(index<0 || index>this.size){
            return
        }
        if(index==0){
            this.prepend(val);
        }else{
            const node = new Node(val);
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    }

    removeNode(index){
        if(index<0 || index >= this.size){
            return null;
        }
        let removedNode;
        if(index==0){
            removedNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
            
        }
        this.size--;
        return removedNode.val;
    }

    removeValue(val){
        if(this.isEmpty()){
            return null;
        }
        let removedVal;
        if(this.head.val == val){
            this.head = this.head.next;
            this.size--;
            return val;
        }else{
            let tempNode = this.head;
            while(tempNode.next && tempNode.next.val !==val){
                tempNode = tempNode.next;
            }
            if(tempNode.next){
                removedVal = tempNode.next;
                tempNode.next = removedVal.next;
                this.size--;
                return val;
            }
            return null;
        }
    }
    search(val){
        if(this.isEmpty()){
            return -1;
        }else{
            let tempNode =this.head;
            let ind=0;
            while(tempNode){
                if(tempNode.val ===val){
                    return ind;
                }
                tempNode =tempNode.next;
                ind++;
            }
            return -1;
        }
    }

    reverseList(){
        if(this.isEmpty()){
            return null;
        }
        else{
            let prev=null,tempNode = this.head;
            while(tempNode){
                let next = tempNode.next
                tempNode.next = prev;
                prev =tempNode;
                tempNode = next;
            }
            this.head = prev;
        }
    }


    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let tempNode = this.head;
            let listValues ='';
            while(tempNode){
                listValues+=`${tempNode.val} `;
                tempNode = tempNode.next;
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList();
list.print();
list.append(10);
list.append(20);
list.append(30);
list.print();
list.insertAnyIndex(40,1);
list.print();
// console.log(list.search(50));
list.reverseList();
list.print();
