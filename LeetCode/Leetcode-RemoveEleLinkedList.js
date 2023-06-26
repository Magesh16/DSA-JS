var removeElements = function(head, val) {
    var tempNode = head;
    var prev = null;
    while (tempNode) {
        if (tempNode.val == val) {
            if (prev) {
                prev.next = tempNode.next;
            }
            else {
                head = tempNode.next;
                prev = null;
            }
        } else {
            prev = tempNode;
        }
        
        tempNode = tempNode.next;
    }
    return head;

};