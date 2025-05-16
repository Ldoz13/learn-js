// let myName  = "Eldhose    "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.eldhose = function(){
    console.log(`eldhose is present in all objects`);
    
}
// Array.prototype.eldhose = function(){
//     console.log(`eldhose is present in all objects`);
    
// }

heroPower.eldhose()

myHeros.eldhose()



// Inheritance

const user = {
    name:"chai",
    isLoggedIn: true,

}


const teacher = {
    makeVideo: true
}

const assistant = {
    isAvailable: false
}

const TASupport = {
    fullTime: true,
    makeAssignment:"JS Assignment",
  __proto__:assistant
}

teacher.__proto__=user


// Modern Syntax


Object.setPrototypeOf(assistant, teacher)


let username = "eldhose           "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`); 
    
}

username.trueLength()

"ldoz".trueLength()

new Promise((resolve, reject) => {

})