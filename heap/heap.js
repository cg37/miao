class MinHeap { //小顶堆
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a-b
    this.heapify()
  }
  _swap(i, j) {
    let temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }
  heapify() {
    if (this.size < 2) return
    for(let i = 1; i < this.size; i++) {
      this.heapUp(i)
    }
  }
  peak(){
    if (this.size === 0) return null
    return this.data[0]
  }

  push(val) {
    this.data.push(val)
    this.heapUp(this.size - 1)
  }

  pop(){
    if (this.size === 0) return null
    let res = this.data[0]
    let last = this.data.pop();
    if(this.size !== 0) {
      this.data[0] = last
      this.heapUp(0)
    }
    return res
  }

  heapUp(index) {
    while(index > 0) {
      let ParentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[ParentIndex]) < 0) {
        this._swap(index, ParentIndex)
        index = ParentIndex
      } else {
        break
      }
    }
  }
  heapDown(index){
    let lastIndex = this.size - 1
    for(;;){
      let leftIndex = index * 2 + 1
      let rightIndex = index * 2 + 2
      let findIndex = index
      if (leftIndex <= lastIndex &&
          this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
            findIndex = leftIndex
          }
      if (rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
          findIndex = rightIndex
        }

    }
  }

  get size(){
    return this.data.size
  }
}

