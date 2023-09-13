//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
      const sub = function(n1,n2){
  return n1 - n2
} 

//Callback example
const cb = function(n1,n2, callback){
    try {
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch (error) {
        if(error instanceof TypeError){
            throw new Error("Not the correct type")
        }
        else if(error instanceof SyntaxError){
            throw new Error("Error in syntax")
        }
    }
};

console.log( add(1,2) )     // What will this print?
console.log( add )          // What will it print and what does add represent?
console.log( add(1,2,3) ) ; // What will it print
console.log( add(1) );	  // What will it print 	
console.log( cb(3,3,add) ); // What will it print
console.log( cb(4,3,sub) ); // What will it print
console.log(cb(3,3,add())); // What will it print (and what was the problem)
console.log(cb(3,"hh",add));// What will it print
