const user = {
    username: "abhishek",
    Logincount: 8,
    signedIn: true,
    getUserDetails: function(){
       // console.log("got username from DB")
        //console.log(`${this.username}`)
       // console.log(this);   // this will give the current context
        
    }

}



//console.log(user.username);
//console.log(user.getUserDetails())
//console.log(this);



// Constructor function
//----------------------

function User(username,Logincount,signedIn){
    this.username = username
   this.Logincount = Logincount
    this.signedIn = signedIn
    this.greeting = function(){
        console.log(`welcome ${User.username}`)
    }
    return this // if you write return or not , it will implicitly return the value
}

// const userOne = User("abhishek",45, true)
// const userTwo = User("abhi",47, false)   // it will override the function values. To avoid these issues use new keyword(it create new instance)


const userOne = new User("abhishek",45, true)
const userTwo = new User("abhi",47, false) 


console.log(userOne)
console.log(userTwo)











