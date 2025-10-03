class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor(iterable) {
    this.head = null;
    this.size = 0;

    if (iterable && Symbol.iterator in Object(iterable)) {
      for (let item of iterable) {
        this.push_back(item);
      }
    }
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  front() {
    return this.head ? this.head.value : undefined;
  }

  push_front(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  push_back(value) {
    let node1 = this.head;
    const node = new Node(value);

    if (!node1) {
      this.head = node;
    } else {
      while (node1.next !== null) {
        node1 = node1.next;
      }
      node1.next = node;
    }
    this.size++;
  }

  pop_front() {
    if (!this.head) return undefined;
    let val = this.head.value;
    this.head = this.head.next;
    this.size--;
    return val;
  }

  pop_back() {
    if (!this.head) return undefined;

    if (this.head.next === null) {
      let val = this.head.value;
      this.head = null;
      this.size--;
      return val;
    }

    let node = this.head;
    while (node.next.next !== null) {
      node = node.next;
    }
    let val = node.next.value;
    node.next = null;
    this.size--;
    return val;
  }

  at(index) {
    if (index < 0 || index >= this.size) return undefined;

    let node = this.head;
    let val = 0;
    while (val !== index) {
      node = node.next;
      ++val;
    }
    return node.value;
  }

  insert(index, value) {
    let node = this.head;
    let newNode = new Node(value);
    let val = 0;

    if (index < 0 || index > this.size) return undefined;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    while (val !== index - 1) {
      node = node.next;
      ++val;
    }
    newNode.next = node.next;
    node.next = newNode;
    this.size++;
  }

  erase(index) {
    if (index < 0 || index >= this.size) return undefined;

    if (index === 0) {
      return this.pop_front();
    }

    let node = this.head;
    let val = 0;
    while (val !== index - 1) {
      node = node.next;
      ++val;
    }
    let del = node.next.value;
    node.next = node.next.next;
    this.size--;
    return del;
  }

  remove(value) {
    let count = 0;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
      ++count;
      this.size--;
    }

    let node = this.head;
    while (node && node.next) {
      if (node.next.value === value) {
        node.next = node.next.next;
        ++count;
        this.size--;
      } else {
        node = node.next;
      }
    }
    return count;
  }

  reverse() {
    let prev = null;
    let node = this.head;

    while (node) {
      let next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    this.head = prev;
  }

  toArray() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}
let list = new SinglyLinkedList();

list.push_back(10);
list.push_back(20);
list.push_front(5);
list.insert(1, 15);
console.log(list.toArray()); 
console.log(list.at(2)); 
console.log(list.pop_front()); 
console.log(list.pop_back()); 
console.log(list.toArray());
list.reverse();
console.log(list.toArray());
list.remove(15);
console.log(list.toArray()); 
