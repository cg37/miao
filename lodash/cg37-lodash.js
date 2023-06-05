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
    let flatten = []
    for (let i of array){
      if(Array.isArray(i)) {
        let flatitem = this.flattenDeep(i)
        flatten.push(flatitem)
      } else {
        flatten.push(i)
      }
    }
    return flatten
  },

  flattenDepth:function(array, depth = 1) {
    if (depth === 0) return array.slice()
    let flatted = []
    for (let i of array) {
      if(Array.isArray(i)) {
        let nested = flattenDepth(i, depth - 1)
        flatted.push(...nested)
      } else {
        flatted.push(i)
      }
    }
    return flatted
  },

        // fromPairs,toPairs,head,indexOf,lastIndexOf,initial,join,last,pull,reverse,every,some
        // countBy,groupBy,keyBy,forEach,map,filter,reduce,reduceRight,size,sortBy,sample,
        // isUndefined,isNull,isNil,max,min,maxBy,minBy,round,sumBy
        // flagMap,flatMapDepth,get,has,mapKeys,mapValues
        // range,stringifyJSON,concat,isEqual,repeat,padStart,padEnd,pad,keys,values,random,
        // round,ceil,floor,cloneDeep
        // trim,trimStart,trimEnd,assign,merge,

}

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
]
cg37.findIndex(users, function(o) { return o.user == 'barney'; });



