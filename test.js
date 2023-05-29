var isPrime = function(n) {
  if(n % 2 == 0) {
    return false
  }
  for(var i = Math.trunc(n/2); i > 0; n--) {
    if(n % i == 0) {
      return false
    }
  }
  return true
}

isPrime(1997)

function solve(x, y, how) {
  if (x == 4 && y == 4) {
    console.log(how)
    return how

  } else if (x > 4 || y > 4) {
    return null
  } else {
    solve (x + 1, y, how + '>')
    solve (x, y + 1, how + 'v')
  }
}

function rev(n) {
  if (n == 0) {
    return null
  }
  let a = + prompt ()
  rev(n - 1)
  console.log(a)
}

function min(a, b) {
  if (a > b)
    return b
  else return a
}

function isEven(n) {
  if (n == 0) return true
  else if (n == 1) return false
  else if (n > 1) return isEven(n-2)
  else if (n < 0) return isEven(-n)
}

function countBs(str){
  let count = 0
  for(let i = 0; i < str.length; i++) {
    if (str.at(i) == 'B') count++
  }
  return count
}

function countChar(str, char) {
  let count = 0
  for(let i = 0; i < str.length; i++) {
    if (str.at(i) === char) count++
  }
  return count
}

/*
*
*    快排相关
*
*/
//

// 生成size位的随机数组
function randomArray(size) {
  let res = []
  for (let i = 0; i < size; i++) {
    res.push(Math.random() * size ^ 0) // (* size):random的范围在0~size之间; (^ 0) 位运算将结果取为整数
  }
  return res
}

//检查是否排序成功
function isSorted(nums) {
  for(let i = 0; i < nums.length-1; i++){
    if (nums[i+1] < nums[i]) return false
  }
  return true
}


// 数组元素交换
function swap(array, i, j) {
  var t = array[i]
  array[i] = array[j]
  array[j] = t
  return array
}

//冒泡排序
function bubbleSort(nums) {
  for (let stop = 0; stop < nums.length - 1; stop++) {
    let flag = true
    for (let i = 0; i <= stop; i++) {
      if (nums[i] > nums[i + 1]) {
        flag = false
        swap(nums, i, i + 1)
      }
    }
    if (flag) {
      break
    }
  }
  return nums
}


function insertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i]
    for(var j = i - 1; j >=0 ; j--) {
      if (nums[j] > temp) {
        nums[j + 1] = nums[j]
      } else {
        break
      }
    }
    nums[j+1] = temp
  }
  return nums
}

function selecSort(array) {
  for (let start = 0; start <= array.length-2; start++) {
    let minIndex = start
    for (let i = start + 1; i <array.length; i++) {
      if(array[i] < array[minIndex]) {
        minIndex
      }
    }
    swap(array,start, minIndex)
  }
  return array
}

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  let mid = array.length >> 1
  let leftArray = array.slice(0,mid)
  let rightArray = array.slice(mid)
  leftArray = mergeSort(leftArray)
  rightArray = mergeSort(rightArray)

  let i = 0
  let j = 0
  let k = 0
  while(i < leftArray.length && j < rightArray.length) {
    if(leftArray[i] < rightArray[j]) {
      array[k++] = leftArray[i++]
    } else {
      array[k++] = rightArray[j++]
    }
  }
  while(i < leftArray.length) {
    array[k++] = leftArray[i++]
  } while (j < rightArray.length) {
    array[k++] = rightArray[j++]
  }
  return array
}

function quickSortSimple(array) {
  if (array.length < 2) {
    return array.slice
  }
  let lessarray=[]
  let greaterarray=[]
  let mid = []
  let chosenOne = array.length >> 1

  for (let i = 0; i < array.length; i++) {
    if(array[i] < array[chosenOne]) {
      lessarray.push(array[i])
    } else if(array[i] > array[chosenOne]){
      greaterarray.push(array[i])
    } else {
      mid.push(array[chosenOne])
    }
  }
  lessarray = quickSortSimple(lessarray)
  rightArray = quickSortSimple(greaterarray)

  return lessarray.concat(mid, greaterarray)
}


function quickSort(array, start = 0, end = array.length) {
  if (end - start < 2) {
    return array
  }
  let pivotIndex = Math.floor((end - start) * Math.random() + start)
  let pivot = array[pivotIndex]

  swap (array, pivotIndex, end - 1) // 将元素放到数组的末尾

  let i = start - 1
  for (j = start; j < end - 1; j++) {
    if (array[j] < pivot) {
      i++
      swap(array, i, j)
    }
  }
  i++
  swap(array, i, j)

  quickSort(array, start, i)
  quickSort(array, i + 1, end)

  return array
}


function arrayToList(array) {
  if (array.lenght === 0) return null
  let objects=[]
  for (let item of array) {
    var obj = {
      val: item,
      next: null
    }
    objects.push(obj)
  }
  for (let i = 0; i < array.length - 1; i++) {
    objects[i].next = objects[i + 1]
  }

  return objects[0]
}

function arrayToList(array) {

  let dummy = {
    val : 0,
    next: null
  }
  let preNode = dummy
  for (let item of array) {
    let node = {
      val: item,
      next: null
    }
    preNode.next = node
    preNode = node
  }
  return dummy.next
}

function arrayToListR(array) {
  if (array.length === 0 ) {
    return null
  }
  let head = {
    val: array[0],
    next: null
  }

  let arrayLast = array.slice(1)
  head.next = arrayToListR(arrayLast)

  return head
}


function listToArray(list) {
  let array = []
  let p = list

  while (p !== null) {
    array.push(p.val)
    p = p.next
  }
  return array
}

function listToArrayR(list) {
  if (list === null) {
    return []
  }
  let firstVal = list.val
  var res = listToArrayR(list.next)
  res.unshift(firstVal)

  return res
}
crea
function prepend(val, list) {
  let node = createNode(val)
  node.next = list
  return node
}

function append(val, list) {
  let node = creatNode(val)
  if(list === null) {
    return node
  }
  let p = list
  while(p.next) {
    p = p.next
  }
  p.next = node

}

function nth(list, index) {
  if (index < 0) return
  let head = list
  let c = 0

  while(head && c < index) {
    head = head.next
    c++
  }

  return head ? head : undefined
}

function nthR(list, index) {
  if (index < 0) {
    return
  }
  if (list === null) return

  if (index === 0) {
    return list.val
  }

  return nthr(list.next, index - 1)
}

function remove(list, index) {
  let c = index - 1
  let head = list

  while(c-- && head) {
    head = head.next
  }
  head.next = head.next.next
  return list
}

function createNode(val, next = next){
  let node = {
    val,
    next
  }
  return node
}

function insert(val, list, index) {
  let c = 0;
}
