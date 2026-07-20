console.log("hello World");


var x;
x= 20;
var x= 30;

console.log(x); 

// var is mutable and can be redeclared.
// Redeclaring the same variable is allowed.
// The latest assigned value (30) replaces the previous value (20).


let a = 10;
let b = 20;
let c = 20;

console.log( a + b + c);


//Properties of let:

// Mutable
// Cannot be redeclared in the same scope
// Block scoped
// Hoisted (but in the Temporal Dead Zone until initialized)


let d;
console.log(d); //undefined

const PI = 3.14;

console.log(PI);


// PI  = 20; 

// Cannot reassign a const variable.
// PI = 20; // TypeError: Assignment to constant variable.

