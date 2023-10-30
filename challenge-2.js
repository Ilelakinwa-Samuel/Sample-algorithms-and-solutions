function fizzBuzz(input){
    if (input % 5 === 0 && input % 3 === 0){
        return "fizzbuzz" 
    }
    else if (input % 5 === 0){
        return "buzz"
    }
    else if (input % 3 === 0){
        return "fizz"
    }
      else {
       return input
      }
  
} 
console.log(fizzBuzz(3))
console.log(fizzBuzz(9))
console.log(fizzBuzz(5))
console.log(fizzBuzz(25))
console.log(fizzBuzz(15))
console.log(fizzBuzz(7))   
   
module.exports = fizzBuzz
