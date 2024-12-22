// singelton 

// object literals



// object literals

const mySym = Symbol("key1") //--> symbol is a data type in javascript

const JsUser = {
    name: "abhishek",
    "fullname":  "abhishek p",
    [mySym]: "mykey1",  //-->symbol is used in objects syntax is important
    age: 19,
    location: "calicut",
    email: "abhishek@gmail.com",
    isLoggedIn: false,
    IsLogindays: ["Monday","Saturday"],

}

console.log(JsUser.email)   
console.log(JsUser["email"])  // this type of syntax is used to access the fullname
console.log(JsUser["fullname"])

console.log(JsUser[mySym])
console.log(typeof mySym)



JsUser.email ="abhi@gmail.com"
// Object.freeze(JsUser)  // --> when you freeze it then the changes will not propagate

JsUser.email ="abhish@gmail.com"

console.log(JsUser)



JsUser.greeting = function(){
    console.log("hello js user");
}

console.log(JsUser.greeting());

// when you write  JsUser.greeting  --> it will give the reference to the function


JsUser.greetingTwo = function(){
    console.log(`hello abhishek , ${this.name}`)  //--> this  keyword will refer to the  current object variables
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());
