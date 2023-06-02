let cg37 = {
  compact:function (array, size) {
    for (let i = 0; i < array.length; i++) {
      if(!Boolean(array[i])) {
        array.splice(i,1)
      }
    }
    return array
  }

}
