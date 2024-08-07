function sayMyName(){
    console.log("D")
    console.log("E")
    console.log("B")
    console.log("A")
}

sayMyName();   //------'sayMyName' is only reference , but after adding '()' we execute the function .

// function addTwoNum(number1,number2){ //here the number1 and number2 are parameters
//     console.log(number1 + number2)
// }
// addTwoNum(1,2)
// addTwoNum()
// addTwoNum(3,"4")
// addTwoNum(3,"a")
// addTwoNum(3,null)
// function addTwoNum(number1,number2){ //here the number1 and number2 are parameters
//     let result = number1 + number2
//     console.log("deba")   //but here it is executed bcs this is place before return 
//     return result   // or we can directly do "return number1+number2"
//     console.log("deba")   //never executed bcs after return non of the code will execute

// }

// const ans = addTwoNum(1,2)

// console.log("ans is : ",ans)

function loginUserMessage(username){
    console.log(typeof username)
    return `${username} just loggedin`
}
console.log(loginUserMessage("debasish"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())


