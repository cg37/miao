/* 将MyMap，MySet，Stack，Queue，LinkedList
全部使用class语法重写
/miao/oop.js


|充电大喵| 11:11:51
LinkedList实现前后增删以及at以及length
*/


class Vector{
  static plus(vec1, vec2) {
    let x = vec1.x + vec2.x
    let y = vec1.y + vec2.y
    return new Vector(x, y)
  }
  constructor(x,y){
    this.x = x
    this.y = y
  }
  plus(vec) {
    let x = this.x + vec.x
    let y = this.y + vec.y
    return new Vector(x,y)
  }
  minus(vec){
    let x = this.x - vec.x
    let y = this.y - vec.y
    return new Vector(x, y)
  }
  get length(){
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

class Complex{
  static plus(complex1, complex2){
    let real = complex1.real + complex2.real
    let imag = complex1.imag + complex2.imag
    return new Complex(real, imag)
  }
  static minus(complex1, complex2){
    let real = complex1.real - complex2.real
    let imag = complex1.imag - complex2.imag
    return new Complex(real, imag)
  }
  static mul(complex1, complex2){
    let real = complex1.real * complex2.real - complex1.imag * complex2.imag
    let imag = complex1.real * complex2.imag + complex1.imag * complex2.real
    return new Complex(real, imag)
  }
  static div1(complex1, complex2) {
    let helper = new Complex(complex2.real, -complex2.imag)
    let up = Complex.mul(complex1, helper)
    let down = Complex.mul(complex2, helper)
    let real = up.real / down.real
    let imag = up.imag / down.real
    return new Complex(real, imag)
  }

  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }

  plus1(complex) {
    let real = this.real + complex.real
    let imag = this.imag + complex.imag
    return new Complex(real, imag)
  }

  minus1(complex) {
    let real = this.real - complex.real
    let imag = this.imag - complex.imag
    return new Complex(real, imag)
  }

  mul1(complex){
    let real = this.real * complex.real - this.imag * complex.imag
    let imag = this.real * complex.imag + this.imag * complex.real
    return new Complex(real, imag)
  }

  div(complex) {
    let helper = new Complex(complex.real, -complex.imag)
    let up = this.mul1(helper)
    let down = complex.mul1(helper)
    let real = up.real / down.real
    let imag = up.imag / down.real
    return new Complex(real, imag)
  }
}
// let a = new Complex(4,5)
// let b = new Complex(1,2)

// console.log('a.div1(b) = ', a.div1(b))
// console.log('Complex.div(a,b) = ', Complex.div(a,b))
//2.8 - 0.6i

  class LinkedList{
    constructor(...initVals){
      this.head = null
      this.tail = null
      this.nodeCount = 0
      for(let it of initVals) {
        this.append(it)
      }
    }
    append(val) { //队尾增加元素
      let node = {
        val: val,
        next: null
      }
      if(this.head === null) {
        this.head = this.tail =node
        this.nodeCount++
        return this.nodeCount
      } else {
        this.tail.next = node
        this.tail = node
        this.nodeCount++
        return this.nodeCount
      }
    }
    prepend(val) { //队首增加元素
      let node = {
        val: val,
        next: null
      }
      if (this.head === null) {
        this.head = this.tail = node
        this.nodeCount++
        return this.nodeCount
      } else {
        node.next = this.head
        this.head = node
        this.nodeCount++
        return this.nodeCount
      }
    }
    at(idx) {
      let node = this.head
      if(idx > this.nodeCount) return false
      else {
        for(let i = 0; i < idx; i++) {
          node = node.next
        }
        return node.val
      }
    }

    get size(){
      return this.nodeCount
    }
  }

  // var s = new LinkedList()
// s.append(1)
// s.append(2)
// s.prepend(3)
// s.prepend(4)

  class Queue{
    constructor(...initVals){
      this.head = null
      this.tail = null
      this.nodeCount = 0
      for(let it of initVals) {
        this.add(it)
      }
    }
    add(val){ //队尾push
      let node = {
        val: val,
        next: null
      }
      if(this.head === null) {
        this.head = this.tail = node
        this.nodeCount++
        return null
      } else {
        this.tail.next = node
        this.tail = node
        this.nodeCount++
        return this.nodeCount
      }
    }
    pop(){
      let val = this.head.val
      this.head = this.head.next
      this.nodeCount--
      return val
    }
    get size(){
      return this.nodeCount
    }
  }

class Stack {
  constructor(){
    this.head = null
    this.tail = null
    this.nodeCount = 0
  }
  push(val){
    let node = {
      val: val,
      next: null
    }
    if(this.head === null) {
      this.head = this.tail = node
      this.nodeCount++
      return null
    } else {
      node.next = this.head
      this.head = node
      this.nodeCount++
      return null
    }
  }
  pop(){
    if (this.head === null) return null
    else if(this.head === this.tail){
      this.nodeCount--
      let val = this.head.val
      this.head = this.tail = null
      return val
    } else {
      let val = this.head.val
      this.head = this.head.next
      this.nodeCount--
      return val
    }
  }
  get size(){
    return this.nodeCount
  }
}

class MyMap{
  constructor(key, val){
    this.keys = []
    this.vals = []
    this.mapSize = 0
  }
  set(key, val) {
    if (this.keys.includes(key)) {
      let index = this.keys.indexOf(key)
      this.vals[index] = val
    } else {
      this.keys.push(key)
      this.vals.push(val)
      this.mapSize++
    }
  }
  get(key){
    if(this.keys.includes(key)) {
      let index = this.keys.indexOf(key)
      return this.vals[index]
    } else {
      return
    }
  }
  delete(key){
    if(this.keys.includes(key)) {
      let index = this.keys.indexOf(key)
      this.vals[index] = null
      this.keys[index] = null
      this.mapSize--
    } else {
      return
    }
  }
  get size(){
    return this.mapSize
  }


}
// var a = new MyMap()
// a.set('foo', 1)
// a.set('bar', 2)
// a.set('foo', 3)
// a.delete("foo")

class MySet{
  constructor(){
    this.elements = []
    this.setSize = 0
  }
  has(val) {
    if(this.elements.includes(val)){
      return true
    } else {
      return false
    }
  }
  add(val){
    if(this.has(val)){
      return
    } else {
      this.elements.push(val)
      this.setSize++
    }
  }
  delete(val) {
    if(this.has(val)){
      let index = this.elements.indexOf(val)
      this.elements[index] = null
      this.setSize--
      return
    } else {
      return
    }
  }
  get size(){
    return this.setSize
  }
}
