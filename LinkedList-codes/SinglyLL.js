import readline from 'readline-sync'
class Node{
    constructor(val){
        this.val = val;
        this.next =null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
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

    insertAtAnyIndex(val,index){
        const node =new Node(val);
        if(index<0 || index>this.size){
            return
        }
        let tempNode = this.head;
        for(let i=0;i<index-1;i++){
            tempNode =tempNode.next;
        }
        node.next = tempNode.next;
        tempNode.next = node;
        this.size++;
    }
    removeEle(val){
        let tempNode = this.head;
        let prev=null;
        while(tempNode){
        if(tempNode.val == val){
            if(prev){
            prev.next = tempNode.next;
            }else{
                this.head = tempNode.next;
                prev=null;
            }
        }else{
            prev =tempNode;
        }
        tempNode =tempNode.next;
    }
    }
    mergeLL(list2, index){
        if(!this.isEmpty()){
            let tempNode =this.head;
            for(let i=0;i<index-1;i++){
                tempNode =tempNode.next;
            }
            let prev =tempNode.next;
            let temp2Node = list2.head;
            tempNode.next = temp2Node;
            while(temp2Node.next){
                temp2Node =temp2Node.next;
            }
            temp2Node.next = prev;
        }
    }

    mergeTwoLL(list2, a,b){
        let tempNode =this.head;
        let tempNext =this.head;        
        for(let i=0;i<a-1;i++){
            tempNode = tempNode.next;                                                                                                                                                                                                                       
        }
        for(let i=0;i<=b;i++){
            tempNext = tempNext.next;
        }
        let prev = tempNode;
        let temp2Node = list2.head;
        prev.next = temp2Node;
        while(temp2Node.next){
            temp2Node = temp2Node.next;
        }
        temp2Node.next = tempNext;
    }

    reverseList(){
        let tempNode =this.head;
        let prev=null;
        while(tempNode){
            let next = tempNode.next;
            tempNode.next =prev;
            prev = tempNode;
            tempNode =next;
        }
        this.head =prev;
    }

    removeVal(index){
        let countNode = this.head;
        let c=1;
        while(countNode.next){
            c++;
            countNode =countNode.next;
        }
        let indexFromLast = c-index;
        let prev = this.head;
        for(let i=indexFromLast;i>=1;i--){
            if(i!=1){
            prev =prev.next;
        }
        else if(prev.next!=null){
            prev.next = prev.next.next;
        }else{
            prev.next=null;
        }
    }
}
    removeDuplicates(){
        let tempNode = this.head;
        let tempNode2;
        while(tempNode && tempNode.next){
            tempNode2 = tempNode;
            while(tempNode2.next){
                if(tempNode.val == tempNode2.next.val){
                    tempNode2.next = tempNode2.next.next
                }else{
                    tempNode2 =tempNode2.next;
                }
            }
            tempNode =tempNode.next
        }
    }

    print(){
        let tempNode =this.head;
        let listValues='';
        while(tempNode){
            listValues+=`${tempNode.val} `;
            tempNode =tempNode.next;
        }
        console.log(listValues);
    }
}
let list = new LinkedList();
let list2 = new LinkedList();


// let data;
// do{
//     data = readline.question("Enter the data: ");
//     if(data>=0){
//         list.append(data);
//         list.print();
//     }
// }while(data>=0)
list.append(0);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

// list.removeDuplicates();
// list.insertAtAnyIndex(25,2);
// list.reverseList();
list2.append(10000);
list2.append(10001);
list2.append(10002);
list2.append(10003);
list2.append(10004);

list.mergeTwoLL(list2,2,5);
list.print()


