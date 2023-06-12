var cg37 = {
  compact:function (array) {
    let res = []
    for (let i of array) {
      if (i) {
        res.push(i)
      }
    }
    return res
  },

  chunk:function(array, size) {
    let res = []
    let len = array.length
    let start = 0
    while (start < len) {
      res.push(array.slice(start, start + size))
      start = start + size
    }
    return res
  },

  fill:function(array, val, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = val
    }
    return array
  },

  drop:function(array, n = 1) {
    return array.slice(n)
  },

  findIndex:function(array, predicate, fromIndex = 0) {

  },

  findLastIndex:function(array) {},

  flatten:function(array) {
    let flatten = []
    for (let i of array){
      if(Array.isArray(i)) {
        i.forEach(it => flatten.push(it))
      } else {
        flatten.push(i)
      }
    }
    return flatten
  },

  flattenDeep:function(array) {
    let res = []
    for (let i of array) {
      if (Array.isArray(i)) {
        res = res.concat(flattenDeep(i))
      } else {
        res.push(i)
      }
    }
    return res
  },

  flattenDepth: function (array, depth = 1) {
    if (depth === 0) return array.slice()
    let flatted = []
    for (let i of array) {
      if(Array.isArray(i)) {
        let nested = this.flattenDepth(i, depth - 1)
        flatted.push(...nested)
      } else {
        flatted.push(i)
      }
    }
    return flatted
  },

  fromPairs: function (array) {
    let res = {}
    for (let i = 0; i < array.length; i++) {
      let pairs = array[i]
      res[pairs[0]] = pairs[1]
    }
    return res
  },

  toPairs: function (array) {

  },

  head: function (array) {
    if (array.length === 0) return
    else return array[0]
  },

  indexOf: function (array, target, fromIndex = 0) {
    let len = array === null ? 0 : array.length
    if (!len) return -1
    let index = fromIndex === undefined ? 0 : fromIndex
    if (fromIndex < 0) {
      index = array.length + fromIndex
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        if (i >= index) {
          return i
        }
      }
    }
    return -1
  },

  lastIndexOf: function (array, target, fromIndex = 0) {
    let len = array == null ? 0 : array.length
    if (!len) return -1
    let index = fromIndex
    if (fromIndex < 0) {
      index = array.length + fromIndex
    }
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === target) {
        if (i >= index) {
          return i
        }
      }
    }
    return -1
  },
  initial: function (array) {
    if (array.length === 0) {
      return
    }
    return array.slice(0, array.length - 1)
  },

  join: function (array, separator=',') {
    let res = ''
    let len = array.length
    for(let i = 0; i < len - 1; i++) {
      res = res + array[i] + separator
    }
    res = res + array[len - 1]
    return res
  },
  last: function (array) {
    let length = array == null ? 0 : array.length
    return length ? array[array.length - 1] : undefined
  },
  pull: function (array, ...val) {
    let res = []
    for (let it of array) {
      if (!(val.includes(it))) {
        res.push(it)
      }
    }
    return res
  },
  reverse: function (array) {
    let res = []
    let len = array.length
    if (len < 1) return
    for (let i = len - 1; len >=0; i--) {
      res.push(array[i])
    }
    return res
  },
  every: function (array) {

  },
  some: function (array) {

  },


  countBy: function (array) {

  },
  groupBy: function (array) {

  },
  keyBy: function (array) {

  },
  forEach: function (array) {

  },
  map: function (array) {

  },
  filter: function (array) {

  },
  reduce: function (array) {

  },
  reduceRight: function (array) {

  },
  size: function (array) {

  },
  sortBy: function (array) {

  },
  sample: function (array) {

  },

          // isUndefined,isNull,isNil,max,min,maxBy,minBy,round,sumBy
        // flagMap,flatMapDepth,get,has,mapKeys,mapValues
        // range,stringifyJSON,concat,isEqual,repeat,padStart,padEnd,pad,keys,values,random,
        // round,ceil,floor,cloneDeep
        // trim,trimStart,trimEnd,assign,merge,

}




