class MultiplicatorUnitFailure extends Error{}

function primitiveMultiply(a,b){
  if(Math.random() < 0.5) {
    console.log('sucess')
    return a * b
  } else {
    throw new MultiplicatorUnitFailure('message我就试试')
  }
}
function reliableMultiply(a,b) {
  try {
    return primitiveMultiply(a,b)
  } catch(e) {
    if(e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a,b)
    } else {
      throw e
    }
  }

}

//console.log(reliableMultiply(2,3))



/*
*
*
* 8.2 the locked box
*
*/
let box = {
  locked: false,
  unlock(){this.locked = false},
  lock(){this.lock = true},
  _content: [],
  get content(){
    if (this.locked) {
      throw new Error('locked!')
    }
    return this._content
  }
}
debugger;
function withBoxUnlocked(body){
  let isLocked = box.locked
  if(!isLocked) {
    return body()
  }

  box.unlock();
  try {
    return body()
  } finally {
    box.lock()
  }
}
withBoxUnlocked(function(){
                box._content.push('gold piece')
                })
try{
    withBoxUnlocked(function(){
    throw new Error('Pirates on the horizon!')
  })
  }catch(e) {
      console.log('Error raised: ' + e)
    }
console.log(box.locked)

function WITH(...args){
  let func = args.pop()


}
WITH(open('a.txt'),open('a.txt'),(a,b)=>{

})

heapDown(a){
  return 0
}
function heapify(array) {
  let start = array.length - 1 >> 1
  for(let i = start; i >= 0; i--) {
    heagDown(arry[i])
  }
}
function heapSort(ary) {
  heapify(ary)
}
