function calculateCartPrice(...num1){   // ... ---> rest operator or spread operator   it will  give an array or arguments
   return num1

}

console.log(calculateCartPrice(200,300,400))



// function calculateCartPrice( val1,val2, ...num1){   
  //  return num1
 
  // }
 
  // console.log(calculateCartPrice(200,300,400))    // output will be [400]  that is 200 will go to val1 and 300 will go to val2
 
 
 
const user ={
    username : "abhishek",
    price : "4000"
}

function handleobject(anyobject){
    console.log(`name is ${anyobject.username} and price is ${anyobject.price}`)

}

// handleobject(user)
handleobject({
    username :"abhi",
    price : "300"
})



const newArray = [200 , 3000 , 4000,455]


function returnsecondvalue(getArray){
    return getArray[1]
}

// console.log(returnsecondvalue(newArray))
console.log(returnsecondvalue([45,79,66]))


