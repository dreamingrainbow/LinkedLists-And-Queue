class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.i = 0
  }
  addNode (v) {
    this.i++
    const newNode = {
        v,
        token: 'A-TiD-00101' + v,
        next: null
    }
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }
  get length () {
    return this.i
  }
};
/* Linked List */
const myList = new LinkedList()
myList.addNode(1)
myList.addNode(2)
myList.addNode(3)
console.log(myList.length)
