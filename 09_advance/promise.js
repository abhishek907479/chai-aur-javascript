const promiseOne = new Promise(function(resolve, reject){   // here resolve and reject is the part of this function
    // Do an async task
    // DB calls , cryptography , networks
  
  setTimeout(function(){
    console.log("Aysnc task is complete")
    resolve()    //  it connects the resolve parameter in the promise and then()
  },1000)
    
})


promiseOne.then(function(){             // we have consume the promise  ,  then()  have connection with  resolve
    console.log("promise consumed")
})    



new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){    // when the  aysnc task is completed then the .then() is executed that is promise is consumed .
    console.log("async 2 in resolved")
})






const third = new Promise(function(resolve ,reject){
    setTimeout(function(){
    resolve({username: "code" , email : "code@gmail.com"})  // an object is passed
    },1000)
})



third.then(function(user){
    console.log(user)
})






const four =new Promise(function(resolve , reject){
    setTimeout(function(){
let error = false
if(!error){
    resolve({username : "abhishek", password :"abhi"})
}else{
    reject("ERROR : something went wrong")
}
    },1000)
})

four
.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{    //  then() after then() is called chaining
console.log(username)
}).catch(function(error){   // it is used to catch the error. reject() is connected with catch()
    console.log(error)
}).finally(()=>{      // finally() always execute whether the promise is either resolved or rejected
    console.log("The promise is either resolved or rejected")
})



const five = new Promise(function(resolve , reject)
{
    setTimeout(()=>{
        let error = false
if(!error){
    resolve({username : "java", password :"123"})
}else{
    reject("ERROR : JS went wrong")
}
    },1000)
})



async function consumePromiseFive(){          //  we can use async -await insted of then() and catch()
   try{
    const response =  await five                   // await for promise
            console.log(response)
   }catch(error){
    console.log(error)             // error should be handled properly
   }
}

consumePromiseFive()




async function getAllUsers(){
try{
   
    const response =   await fetch('https://jsonplaceholder.typicode.com/users')
  
    const data =await response.json()    // converting the into json() also takes time so we have to await for this tooo
console.log(data)
}catch(error){
    console.log(error)
}
}

getAllUsers()




fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{     
return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("error")
})
