   // SCOPE 

  //  {} --> this is called scope


let a = 10   // Global scope 

if(true){
    let a = 100  // Local scope
    console.log("inner : ",a)

}
console.log(a)

// nested scope

function one(){
    const username = "abhishek"

    function two(){
        const website = "youtube"
        console.log(username)  // here we can access the variable username because its scope cover the function two 
    }
    // console.log(website)  // scope of  variable website is inside the function two , it cant be access outside function two

    two()
}

one()



if(true){
    const username = "abhishek"
    if(username === "abhishek"){
       const website = " youtube"
       console.log(username + website);
    }
   // console.log(website);
}
// console.log(username)



// --------------interesting------------


console.log(addone(6))   //  here we can access addone() before declaration

function addone(num){
return num + 1
}


console.log(addTwo(3))  // here we cannot access the addTwo() before declaration....  it is related to hoisting concept


const addTwo = function(num){   // here we declared and hold the function in a variable 
                               // in javascript we can hold function,json etc in a variable
                               
    return num + 1
}

