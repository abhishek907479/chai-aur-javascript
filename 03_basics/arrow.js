const user = {
    username : "abhishek",
    price : "999",
    welcomemessage : function(){
        console.log(`${this.username} welcome to website`)
        // console.log(this)
    }
}
 //////////// this keyword is mainly used with objects

user.welcomemessage()

user.username = "sniya"

user.welcomemessage()

console.log(this)

// global object of browser is window object



 // function chai(){
 //   let user = " abhsihek"
//  console.log(this.user)   // it will give undefined  because this keyword cannot be used inside functions
// }
 // chai()

//----ARROW  FUNCTION--------

const chai = () => {
    let username = "abhishek"
    console.log(this);   // in arrow function also this keyword give empty {}
}


chai()



const addTwo = (num1 , num2) => {
    return num1 + num2
}
// const addTwo = (num1 , num2) => num1 + num2  --> it will  also work ,implicit declaration of return

console.log(addTwo(4,5))




