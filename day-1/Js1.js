
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
const cb = function(n1, n2, callback){
    if (typeof n1 !== "number") {
        throw new Error("n1 must be a number.");
      }
      else if (typeof n2 !== "number") {
        throw new Error("n2 must be a number.");
      }
      else if (typeof callback !== "function") {
        throw new Error("callback must be a function.");
      }
    return "Result from the two numbers: "+n1+"+"+n2+"=" +callback(n1,n2);
};

//Testing Error handling in cb function
try {
  console.log(cb(5,1, add));
} catch (error) {
  console.error("Error:", error.message);
}

// console.log( add(1,2) )     // What will this print?
// console.log( add )          // What will it print and what does add represent?
// console.log( add(1,2,3) ) ; // What will it print
// console.log( add(1) );	  // What will it print 	
// console.log( cb(3,3,add) ); // What will it print
// console.log( cb(4,3,sub) ); // What will it print
// console.log(cb(3,3,add())); // What will it print (and what was the problem)
// console.log(cb(3,"hh",add));// What will it print

//Rest graps the rest of the numbers and uses the function at the end of the return statement
function addV2(n1, n2, ...rest){
  return n1 + n2 + rest.reduce((acc, cur) => acc + cur)
}
console.log(addV2(1,2,3,4,5,6,7,8));

//multiply function
function mul(n1, n2){
  return n1 * n2;
}

console.log(cb(3,4,mul));

const divide = function(n1, n2){
  return n1/n2;
}
console.log(cb(34,2,divide));


//Adds all names with length <=3 to a new array.
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
names = names.filter(name => name.length<=3);
console.log(names);

//Upper case the names and add into new array. 
names = names.map(name => name.toUpperCase);


const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
const newerCars = cars.filter(car => car.year>=2000);
const carsVolvo = cars.filter(car => car.make === "Volvo");
const carsPrice = cars.filter(car => car.price < 5000);

console.log(newerCars);
console.log(carsVolvo);
console.log(carsPrice);



//Implementing my own methods

function myFilter(array, callback){
  return null;
}
 
function myMap(array, callback){
  return null;
}


//Asynchronous Callbacks
// Exercise 1
//Guessing it will print:
//aaaaaaaaaa
//dddddddddd
//ffffffffff
//eeeeeeeee (because of 1000ms delay)
//bbbbbbbbbb (because of 2000ms delay)

//Exercise 2 test
const msgPrinter = function(msg,delay){
  setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");


//Javascript Objects
const car = {
  make : "Cupra",
  model : "Born",
  year : 2023,
  speed: 200
};

//Delete property
delete car.speed;

//Add property
car.color = "blue";

for(prop in car){
  console.log(prop,car[prop])
}

