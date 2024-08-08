let score = 33
console.log(typeof score) //------------------------>number type
console.log(typeof (score))//----------------------->number type



let result = "33"
console.log(typeof result)
console.log(typeof (result))
let valueInNumber = Number(result)
console.log(typeof valueInNumber)


let deba = "33abs"
let valInNum = Number(deba)
console.log(typeof valInNum)//---------->number
console.log(valInNum)

//---"33" ----->33
//---"33abx"---->NaN(but type is number)
//---true/false----->1/0

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);