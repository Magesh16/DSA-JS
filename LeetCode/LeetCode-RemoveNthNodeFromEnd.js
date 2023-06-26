var removeNthFromEnd = function(head, n) {
    let tempNode = head;
    let c=0;
    while(tempNode){
        c++;
        tempNode =tempNode.next;
    }
    let Totalcount = c-n;
    if(Totalcount==0){
        head =head.next;
        return head;
    }
    let prev=head;
    while(Totalcount>=1){
            if(Totalcount!==1){
                prev = prev.next;
            }else if(prev.next !==null){
                prev.next = prev.next.next;
            }else{
                prev.next =null;
            }
            Totalcount--;
    }
    return head;
};