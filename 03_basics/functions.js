function sayMyName() {
    console.log("a")
    console.log("b")
    console.log("h")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("e")
    console.log("k")
  
}


 //sayMyName()


 // function addTwo(number1 , number2){    //the values in the function definition is called parameters
  // console.log(number1 + number2);  

 // }

  // addTwo(3,4)    // values passed in the function is called arguments



 

 function addTwo(number1 , number2){    
    console.log(number1 + number2);  
 
  }

  const result = addTwo(3,4);
  console.log(result);     // here we get undefined because the function do not return any value only printing the value




  
 function addTwo(number1 , number2){    
   
    let result = number1  + number2   // we can also write -- return number1 + number2
    return result
    console.log("hello")  // anything after return in function  is ignored 

 
  }


  const res = addTwo(5,4)
  console.log(res)



  function loginuser(username){
    if(!username){
      console.log("please enter the username")
      return 
    }
    return `${username} just logged in`

  }



 // console.log(loginuser("abhishek"))

console.log(loginuser()) // it gives undefined






function loginuser(username  = "abhi"){
  if(!username){
    console.log("please enter the username")
    return 
  }
  return `${username} just logged in`

}


console.log(loginuser("abhishekbachan"))   // it override the initial value