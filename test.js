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
