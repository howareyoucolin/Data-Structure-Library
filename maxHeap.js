var MaxHeap = function(arr=[]){
    this.arr = arr;
}

MaxHeap.prototype.heapify = function(arr){
    for(var i = 0; i < arr.length; i++){
        this.add({val:arr[i]});
    }
} 

MaxHeap.prototype.size = function(){
    return this.arr.length;
} 

MaxHeap.prototype.add = function(n){
    this.arr.push(n);
    var i = this.arr.length - 1;
    var j = parseInt( (i - 1)/2 );
    while(this.arr[i].val > this.arr[j].val){
        var t = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = t;
        i = j;
        j = parseInt( (i - 1)/2 );
    }
}

MaxHeap.prototype.peekMax = function(){
    return this.arr[0];
}

MaxHeap.prototype.popMax = function(){
    var t = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr[this.arr.length - 1] = t;
    var res = this.arr.pop();
    var i = 0;
    var j1 = i*2+1;
    var j2 = i*2+2;
    if(j1 >= this.arr.length) return res;
    if(j2 >= this.arr.length){
        var j = j1;
    }
    else{
        var j = (this.arr[j1].val > this.arr[j2].val) ? j1 : j2;
    }
    while(this.arr[i].val < this.arr[j].val){
        var t = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = t;
        i = j;
        j1 = i*2+1;
        j2 = i*2+2;
        if(j1 >= this.arr.length) return res;
        if(j2 >= this.arr.length){
            var j = j1;
        }
        else{
            var j = (this.arr[j1].val > this.arr[j2].val) ? j1 : j2;
        }
    }
    return res;
}