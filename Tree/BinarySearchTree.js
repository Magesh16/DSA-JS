class Node{
    constructor(val){
        this.val =val;
        this.left =null;
        this.right =null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root =null;
        this.verticalMap = new Map();
        }
    isEmpty(){
        return this.root==null; 
    }
    insert(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.root =node;
        }else{
            this.insertNode(this.root, node);
        }
    }
    insertNode(root,node){
        if(node.val<root.val){
            if(root.left ===null){
                root.left = node;
            }else{
                this.insertNode(root.left,node);
            }
        }else{
            if(root.right ===null){
                root.right =node;
            }else{
                this.insertNode(root.right,node);
            }
        }
    }
    search(root, val){
        if(!root){
            return false;
        }else{
            if(root.val==val){
                return true;
            }else if(val<root.val){
                return this.search(root.left,val);
            }else{
                return this.search(root.right,val);
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.val);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.val);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.val);
        }
    }
    levelOrderBFS(){
        const queue =[];
        queue.push(this.root);
        while(queue.length){
            let tempNode = queue.shift();
            console.log(tempNode.val);
            if(tempNode.left){
                queue.push(tempNode.left);
            }
            if(tempNode.right){
                queue.push(tempNode.right);
            }
        }
    }
    VerticalOrder(root, level){
        if(!root) return null;
        else{
            if(!this.verticalMap.has(level)){
            this.verticalMap.set(level, [root.val])
            }else{
                this.verticalMap.get(level).push(root.val);
            }
            this.VerticalOrder(root.left,level-1);
            this.VerticalOrder(root.right,level+1);
        }
    }
    printVertical(){
        this.verticalMap.forEach((keys,values)=>{
            console.log(keys, values);
        })
    }

    min(root) {
        if (!root.left) {
          return root.value;
        } else {
          return this.min(root.left);
        }
      }
    delete(val){
        return this.deleteNode(this.root,val);
    }
    deleteNode(root,val){
        if(root==null){
            return root;
        }
        if(val<root.val){
            root.left =  this.deleteNode(root.left,val);
        }else if(val>root.val){
            root.right = this.deleteNode(root.right,val);
        }
        else{
            if(!root.left && !root.right){
            return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.val = this.min(root.right);
            root.right = this.deleteNode(root.right,root.val);
        }
        return root;
    }
}

const bst = new BinarySearchTree();
// console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

bst.VerticalOrder(bst.root,0);
bst.printVertical()

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
bst.postOrder(bst.root);
                                                                                                                                                                                            

// bst.delete(3);
// bst.levelOrderBFS();
// console.log(bst.search(bst.root,15));




