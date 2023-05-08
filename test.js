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
