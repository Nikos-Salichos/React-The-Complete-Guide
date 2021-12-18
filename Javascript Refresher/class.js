//Inheritance
class Human {
    constructor() {
        this.gender = 'female';
    }

    printGender() {
        console.log(this.gender)
    }
}

//Class
class Person extends Human {
    constructor() {
        super() //When extend a class i must should super constructor
        this.name = 'Nikos' //Property
        this.gender = 'male'
    }

    //Method
    printMyName() {
        console.log(this.name)
    }
}

//Usage
const myPerson = new Person()
myPerson.printMyName()
myPerson.printGender()

//Properties are like variables attached to classes/objects
//Methods are like "functions attached to classes/objects"

//ES6
// constructor(){
//     this.myProperty = 'value'
// }
// myMethod() { '...' };

//ES7
// myProperty = 'value'
// myMethod = () => { '...' }





