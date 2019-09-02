/* 
 !6
 6 * 5 * 4 * 3 * 2 * 1 = 720

 !12 
 12 * 11 * 10 * 9 * 8 * 7 * !6
*/

const factorial = (n) => {
  if (!this.cache) {
    this.cache = {}
  }

  if(this.cache[n]) {
    console.log('hago uso de la cache')
    return this.cache[n]
  }

  if (n === 1) { 
    return 1
  }

  this.cache[n] = n * factorial(n-1)
  return this.cache[n]
}

console.log(factorial(6))
console.log(factorial(6))
