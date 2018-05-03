function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

//Adding Head Node;
LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node (value, this.head, null);

    // If head is present add new node to head.prev
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }  //else add new node to head because no head means no node in linked list
}


// Add to Tail
LinkedList.prototype.addToTail = function(value) {

    let newNode = new Node(value, this.tail, null);

    if(this.tail){
        this.tail.next = newNode;
    }
    else {
        this.head = newNode;
    }

    this.tail = newNode;

};

//Removing Head Node

LinkedList.prototype.removeHead = function(){

 if(!this.head) return null; //No head means empty list

 var val = this.head.value; //Just storing head value

 this.head=this.head.next; //Move head to head.next

 if(this.head) this.head.prev=null; //If head is present (means head.next) remove head.prev value

 else this.tail=null; //No head means no tail (empty list)

 return val;
};

LinkedList.prototype.removeTail = function(){

    if(!this.tail){
        return null;
    }

    let val = this.tail.value;

    this.tail = this.tail.prev;

    if(this.tail){
        this.tail.next = null;
    }
    else {
        this.head = null;
    }

    return val;

};

LinkedList.prototype.search = function(){

    let currentNode = this.head;

    console.log('head node value is ' + currentNode.value);

    while(currentNode.next){
        currentNode = currentNode.next;
        if(currentNode === this.tail)
            console.log('tail node value is ' + currentNode.value);
        else
            console.log('next node value is ' + currentNode.value);
    }

};

var ll = new LinkedList();

ll.addToHead(100);

ll.addToHead(200);

ll.addToTail(300);

ll.addToTail(400);

console.log(ll);

ll.removeHead();

ll.removeTail();

// console.log(ll);
