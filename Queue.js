class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.i = 0
  }
  enqueue (v) {
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
  dequeue () {
    this.i--
    if (!this.head) return null
    if (!this.head.next) this.tail = null
    const returnValue = this.head.value
    this.head = this.head.next
    return returnValue
  }
  get length () {
    return this.i
  }
};

/* Queue */
const myQueue = new Queue()
myQueue.enqueue(1)
console.log(myQueue)
myQueue.enqueue(2)
console.log(myQueue)
myQueue.enqueue(3)
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)
myQueue.enqueue(4)
console.log(myQueue)
myQueue.enqueue(5)
console.log(myQueue.length)
console.log(myList)
console.log(myQueue)
