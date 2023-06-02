var cg37 = {
  compact:function (array) {
    for (let i = 0; i < array.length; i++) {
      if(!Boolean(array[i])) {
        array.splice(i,1)
      }
    }
    return array
  },
  chunk:function(array, size) {
    let res = []
    for (let i = 0; i < array.length + size; i = i + size) {
      res.push(array.slice(0, size))
      array.splice(i, size)
    }
    return res
  }
}
console.log(cg37.chunk(['a', 'b', 'c', 'd'], 3))
