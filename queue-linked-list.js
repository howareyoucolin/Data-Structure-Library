function myQueue(){
    this.size = 0;
    this.head = null;
    this.tail = null;
}

myQueue.prototype.isEmpty = function(){
    return this.size === 0;
}

myQueue.prototype.enqueue = function(value){
    var node = {
        val: value,
        next: null
    }
    if(this.head === null) this.head = node;
    if(this.tail === null) this.tail = node;
    else{
        this.tail.next = node;
        this.tail = this.tail.next;
    }
    this.size++;
}

myQueue.prototype.dequeue = function(){
    if(this.isEmpty()) return false;
    var value = this.head.val;
    this.head = this.head.next;
    this.size--;
    return value;
}