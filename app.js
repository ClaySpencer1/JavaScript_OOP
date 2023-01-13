console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {

    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets - pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby){
        this.hobbies.push(hobby);
    }

    removeHobby(hobby){
       let myIdx = this.hobbies.indexOf(hobby);
       this.hobbies.splice(myIdx, 1);
       //using .filer
       //this.hobbies.filter((element, index, array => {
        //if (element != hobby){
        //keep
        //return true;
       // }
       //})
    }
    greeting(){
        console.log(`Hello fellow person!`);
    }

};


console.log("EXERCISE 2:\n==========\n");

class Coder extends Person{
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer"
    }

    greeting(){
        console.log(`Hi, I am a coder!`);
    }
}

console.log("EXERCISE 3:\n==========\n");

let person = new Person(
    "Jon",
    5,
    "Tuscaloosa",
    ["Cycling", "Blogging"]
);

let coder = new Coder(
    "Jeff",
    0,
    "Eutaw",
    ["Reading", "Jogging", "Basketball", "Cooking"],
);

console.log(person);
person.greeting();
console.log(coder);
coder.greeting();


console.log("EXERCISE 4:\n==========\n");

class Calculator{
    constructor(){
        this.result = 0;
    }

    validateB(param){
        if (param == undefined){
            return this.result;
        }
       return param;
    }




    add(a, b){
        let y;  
        if (b==undefined){
        y = this.result; 
        }else{
            y = b;
        }
    
        this.result = a + y;
        return this.result;
    }
    subtract(a, b){
        if (b != undefined){
            this.result = a - b;
        } else {
            this.result -= a;
        }
        return this.result;
    }

    multiply(a, b){
        this.result = a * b;
        return this.result;
    }

    divide(a, b){
        this.result = a / b;
        return this.result;
    }

    display(){
        console.log(this.result);
    }
}
 
let calculator= new Calculator();

calculator.add(0, 1);
calculator.display();
calculator.subtract(11, 1);
calculator.display();
calculator.multiply(5, 11);
calculator.display();
calculator.divide(50, 5);
calculator.display();
calculator.add(5);
calculator.display();

