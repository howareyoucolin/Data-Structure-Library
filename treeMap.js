var TreeMap = function(){
    this.root = null;
    this.map = {};
}

TreeMap.prototype.set = function(key, value){
    var node = {
        key: key,
        left: null,
        right: null
    }
    this.map[key] = value;
    this.insertNode(this.root, node);
}

TreeMap.prototype.delete = function(key){
    this.removeNode(this.root, key);
    delete this.map[key];
}

TreeMap.prototype.get = function(key){
    return this.map[key] !== undefined ? this.map[key] : undefined;
}

TreeMap.prototype.insertNode = function(root, newNode){
    if(root === null) this.root = newNode;
    else if(newNode.key === root.key){}
    else if(newNode.key < root.key){ 
        if(root.left === null) root.left = newNode; 
        else this.insertNode(root.left, newNode);  
    } 
    else{ 
        if(root.right === null) root.right = newNode; 
        else this.insertNode(root.right,newNode); 
    } 
} 

TreeMap.prototype.findMinNode = function(node){ 
    if(node.left === null) return node; 
    else return this.findMinNode(node.left); 
} 

TreeMap.prototype.removeNode = function(root, key){ 
    if(root === null) return null; 
    else if(key < root.key){ 
        root.left = this.removeNode(root.left, key); 
        return root; 
    }
    else if(key > root.key){ 
        root.right = this.removeNode(root.right, key); 
        return root;
    } 
    else{
        if(root.left === null && root.right === null){
            return null; 
        } 
        if(root.left === null){ 
            return root.right; 
        } 
          
        else if(root.right === null){ 
            return root.left; 
        } 
        var aux = this.findMinNode(root.right); 
        root.key = aux.key; 
        root.right = this.removeNode(root.right, aux.key); 
        return root; 
    } 
}

TreeMap.prototype.getKeys = function(){
    var arr = [];
    var traversal = function(root){
        if(root === null) return;
        traversal(root.left);
        arr.push(root.key);
        traversal(root.right);
    }
    traversal(this.root);
    return arr;
}

TreeMap.prototype.getLastKeys = function(){
    var arr = [];
    var traversal = function(root){
        if(root === null) return;
        traversal(root.right);
        arr.push(root.key);
        traversal(root.left);
    }
    traversal(this.root);
    return arr;
}