// IMMEDIATELY INVOKED FUNCTION EXPRESSION  (IIFE)



(function chai(){   // named iife
    console.log("DB connected")

})();   // must put the semicolon at last


((username) => {  // simple iife
    console.log(`Db connect to ${username}`)
})("abhishek")


