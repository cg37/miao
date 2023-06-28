var cg37 = {
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

  compact:function (array) {
    let res = []
    for (let i of array) {
      if (i) {
        res.push(i)
      }
    }
    return res
  },

  /**
   *
   * @inspectArray, 要检查的数组
   * @excludeArray, 要排除的数组
   *
   *
  */
  difference:function(inspectArray, ...excludeArrays) {
    let excludeArray = []
    for (let eArray of excludeArrays) {
      excludeArray = excludeArray.concat(eArray)
    }
    if (inspectArray.length === 0) return []
    if (excludeArray.length === 0) return inspectArray

    // return inspectArray.filter(function(it){
    //   return excludeArray.indexOf(it) < 0
    // })

    return inspectArray.filter(it=>excludeArray.indexOf(it) < 0)
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
    let func = iteratee(predicate)

    let length = array == null ? 0 : array.length
    for (let i = fromIndex; i < length; i++) {
      if(func(array[i])) {
        return i
      }
    }
    return -1
  },

  findLastIndex:function(array, predicate, startLastIndex = array.length == null ? 0 : array.length) {
    let func = iteratee(predicate)

    let length = array == null ? 0 : array.length
    for(let i = startLastIndex - 1; i >= 0; i--){
      if(func(array[i])) {
        return i
      }
    }
  },

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
        res = res.concat(this.flattenDeep(i))
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

  lastIndexOf: function (array, target, fromIndex = array.length - 1) {
    let res = -1
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] === target) {
        res = i
        break
      }
    }
    return res
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


  proerty:function (path) {

  }

        // isUndefined,isNull,isNil,max,min,maxBy,minBy,round,sumBy
        // flagMap,flatMapDepth,get,has,mapKeys,mapValues
        // range,stringifyJSON,concat,isEqual,repeat,padStart,padEnd,pad,keys,values,random,
        // round,ceil,floor,cloneDeep
        // trim,trimStart,trimEnd,assign,merge,

}




  function sum(arr) {
    return array.reduce((a,b) => a + b)
  }

  function sumBy(array, iterator) {
    let res = 0
    for (let i = 0; i < array.length; i++) {
      res = res + iterator(array[i])
    }
    return res
  }

  // var users = [
  //   { 'user': 'barney', 'age': 36, 'active': true },
  //   { 'user': 'fred',   'age': 40, 'active': false }
  // ];

  // _.filter(users, function(o) { return !o.active; });
  // // => objects for ['fred']

  // // The `_.matches` iteratee shorthand.
  // _.filter(users, { 'age': 36, 'active': true });
  // // => objects for ['barney']

  // // The `_.matchesProperty` iteratee shorthand.
  // _.filter(users, ['active', false]);
  // // => objects for ['fred']

  // _.filter(users, 'active');

  function filter(array, predicate) {
    let res = []
    if (typeof predicate === 'string') { //_.filter(users, 'active');
      for (let item of array) {
        if (item[predicate]) {
          res.push(item)
        }
      }
    } else if (Array.isArray(predicate)) { //_.filter(users, ['active', false]);
      for (let item of array) {
        if (item[predicate[0]] === predicate[1]) {
          res.push(item)
        }
      }
    } else if (typeof predicate === 'object') {

    } else if (typeof predicate === 'function') {
      for (let item of array) {
        if (predicate(item)) {
          res.push(item)
        }
      }
    }
    return res
  }
  // filter(array, 'n')
  // filter(array, it=>it['n'])

  // filter(array, ['active', true])
  // filter(array, it => it['active'] === true)

  // filter(array, {'active': true, 'n': 8})
  // filter(array, it => it['active'] === true && it['n'] === 8)


  function filter(array, predicate) {
    let func = predicate
    if (typeof predicate  === 'string') {
      func = function(it) {
        return it[predicate]
      }
    } else if (Array.isArray(predicate)) {
      func = function(it) {
        return it[ predicate[0] ] === predicate[1]
      }
    } else if (typeof predicate === 'object') {
      func = function(it) {
        for(let key in predicate) {
          if (it[key] !== predicate[key]) {
            return false
          }
        }
        return true
      }
    }
    let res = []
    for (let item of array) {
      if (func(item)) {
        res.push(item)
      }
    }
    return res
  }

  function filter(array, predicate) {
    iteratee(predicate)
    let res = []
    for (let i = 0; i < array.length; i++) {
      if(func[array[i]], i, array) {
        res.push(array[i])
      }
    }
    return res
  }

  function turnPredicateToFunction(predicate)   {
    let func = predicate
    if (typeof predicate === 'string') {
      func = function(it) {
        return it[predicate]
      }
    } else if (typeof predicate === 'object') {
      func = function(it) {
        for (let key in predicate) {
          if (it[key] !== predicate[key]) {
            false
          }
        }
        return true
      }
    } else if (Array.isArray(predicate)) {
      func = function(it) {
        for (let it of predicate) {
          return it[ predicate[0] ] === predicate[1]
        }
      }
    }
    return func
  }

  function map(array, predicate) {
    let func = turnPredicateToFunction(predicate)
    let res = []

    for (let i = 0; i < array.length; i++) {
      res.push(func(array[i]),i,array)
    }

    return res
  }

  function matchesProperty(path, srcValue) {
    return function(object) {
      return isMatch(object[path], srcValue)
    }
  }


  function isMatch(object, src) { //判断src 是否是object的一部分
    for (let key in src) {
      if (typeof src[key] === 'object') {
        if (!isMatch(object[key], src[key])) return false
      } else {
          if (object[key] !== src[key]) return false
        }
    }
    return true
  }

  function matches(src) {
    return bind(isMatch, null, undefined, src)
  }

  // function matches(src) {
  //   return bind(isMatch, null, _, src)
  // }


  function iteratee(predicate) {
    let func = predicate
    if (typeof predicate === 'string') {
      func = property(predicate)
    } else if (Array.isArray(predicate)) {
      func = matchesProperty(predicate)
    } else if (typeof predicate === 'object') {
      func = matches(predicate)
    }
    return func
  }

  function property(name) {
    return function(obj) {
      return obj[name]
    }
  }
  function matchesProperty(path, srcValue) {
    return function(object) {
      return isMatch(object[path], srcValue)
    }
  }
  function matches(src) {
    return bind(isMatch, null, undefined, src)
  }



  // 带跳过参数功能的函数绑定
  function bind(func, thisArgs, ...fixedArgs) { //[undefined, 2, undefined, 3]
    return function(...args) { //[1,0]
      let copy = fixedArgs.slice()
      //填空前面跳过的参数
      for (var i = 0, j = 0; i < copy.length; i++) {
        if (copy[i] === undefined) {
          copy[i] = args[j]
          j++
        }
      }
      //后续参数正常放到最后
      while(j < args.length) {
        copy.push(args[j++])
      }
      return func.call(thisArgs, ...copy)
    }
  }

