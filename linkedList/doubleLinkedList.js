class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  constructor(iterables ) {
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  clear() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }


  push_front(value) {
    const node = new Node(value);
    if(!this.#size){
      this.#tail = node;
    }else{
      node.next = this.#head;
      this.#head.prev = node;
    }
    this.#head = node;
    ++this.#size;
  }

  push_back(value) {
    const node = new Node(value);
    if(this.#size === 0){
      this.#head = this.#tail = node;
    } else{
      node.prev = this.#tail;
      this.#tail.next = node;
      this.#tail = node;
    }
    ++this.#size;
  }

  pop_front() {
    if(!this.#size) return null;
    const val = this.#head.data;
    if(this.#size > 1){
      this.#head = this.#head.next;
      this.#head.prev = null;
    } else {
      this.#head = this.#tail = null;
    }
    --this.#size;
    return val;
  }

  pop_back() {
    if(!this.#size) return null;
    const val = this.#tail.data;
    if(this.#size > 1){
      this.#tail = this.#tail.prev;
      this.#tail.next = null
    } else{
      this.#head = this.#tail = null
    }
    --this.#size;
    return val;
  }

  front() {
    return this.#head ? this.#head.data : undefined;
  }

  back() {
    return this.#tail ? this.#tail.data : undefined;
  }

  at(index) {
    if (index < 0 || index >= this.#size) return undefined;

    let node;
    let val;

    if (index < this.#size / 2) {
      node = this.#head;
      val = 0;
      while (val !== index) {
        node = node.next;
        val++;
      }
    } else {
      node = this.#tail;
      val = this.#size - 1;
      while (val !== index) {
        node = node.prev;
        val--;
      }
    }

    return node.data;
  }

  insert(index, value) {
    if(index < 0 || index > this.#size) return;
    const node = new Node(value); 

    if(this.#size === 0 || index === 0){
      if(this.#head){
        node.next = this.#head;
        this.#head.prev = node;
      } else{
        this.#tail = node;
      }
      this.#head = node;
    }
    else if(index === this.#size){
      node.prev = this.#tail;
      this.#tail.next = node;
      this.#tail = node;
    } else{
      let current;
      let val;
      if(index < this.#size / 2){
        current = this.#head;
        val = 0;
        while(val !== index){
          current = current.next;
          ++val;
        }
      } else{
        current = this.#tail;
        val = this.#size - 1;
        while(val !== index){
          current = current.prev;
          --val;
        }
      }
      node.prev = current.prev;
      node.next = current;
      current.prev.next = node;
      current.prev = node;
    }
    ++this.#size;
  }

  erase(index) {
    if (index < 0 || index >= this.#size) return; 

    let node;

    if (index === 0) {
      node = this.#head;
      this.#head = this.#head.next;
      if (this.#head) {
        this.#head.prev = null;
      } else {
        this.#tail = null; 
      }
    } else if (index === this.#size - 1) {
      node = this.#tail;
      this.#tail = this.#tail.prev;
      if (this.#tail) {
        this.#tail.next = null;
      } else {
        this.#head = null;
      }
    } else {
      if (index < this.#size / 2) {
        node = this.#head;
        let val = 0;
        while (val < index) {
          node = node.next;
          val++;
        }
      } else {
        node = this.#tail;
        let val = this.#size - 1;
        while (val > index) {
          node = node.prev;
          val--;
        }
      }
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    this.#size--;
    return node.data; 
  }
}
const list = new DoublyLinkedList();
list.push_back(10);
list.push_back(20);
list.push_front(5);
console.log(list.front()); 
console.log(list.back());  
console.log(list.at(1));   
list.insert(1, 7);         
console.log(list.at(1));   
list.erase(2);             
console.log(list.at(2));   
console.log(list.size());  
console.log(list.isEmpty());
list.clear();
console.log(list.size());  
