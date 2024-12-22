//singleton

//const tinderUser = new object()  // Another type of syntax for singleton object initialization
const tinderUser = {}   // non-singleton 

tinderUser.Id = "123abc"
tinderUser.name = " abhishek"
tinderUser.isLoggedIn = false

//console.log(tinderUser);



const regular = {
email : "some@gmail.com",
fullname: {
    username:{
        firstname : "abhishek",
        lastname : "p"
    }
}
 
}

console.log(regular.fullname.username.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


//const obj3 = {obj1 , obj2}
 
//const obj3 = Object.assign(obj1 , obj2)  // --> merge obj2 with obj 1 here obj1 is  the target and obj2 is the source
//const obj3 = Object.assign({},obj1,obj2) // --> here  {} is the target so merge obj1 and obj2 to {}

// Another syntax  

const obj3 = {...obj1, ...obj2}
console.log(obj3);



const course ={
 coursename : "js in hindi",
 price: "999",
 teacher: "abhishek"
 

}


//course.teacher


const {teacher : instructor} = course   // object destructuring ---. we cant use course.soursename all the time , for the simplicity we destructure the object name


//console.log(teacher);
console.log(instructor)  



// Json file format


// {
//   "name" : "abhishek",
//     "price" : "free",      
//     "cpursename" : "js in hindi"
// }
//
//    here keys   and values are  string


//either the data from  api is in the form of json or in the form of array of objects like


// [

 //  {},
 //  {},
 //  {}

//  ]








 