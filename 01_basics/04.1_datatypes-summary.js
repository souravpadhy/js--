//  Primitive - call by value - changes in copy

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// java is a dynamic type language

// Reference (Non primitive)-call by reference

// Array, Objects, Functions  

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


  


// stack(primitive) and heap(non-primitive)

let myYoutubename = "souravdotcom"

let anothername  = myYoutubename

anothername = "vijaydotcom"

console.log(myYoutubename);
console.log(anothername);

let userone = {
    email: "@google.com",
    upi: " usear@ybl"
}

let usertwo = userone

usertwo.email = "dhoni@google.com "

console.log(userone.email);
console.log(usertwo.email);