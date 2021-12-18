//Spread operator used to split as array elements or object properties
//1st example
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4];
console.log(newNumbers)

//2nd example
const person = {
    name: 'Nikos'
}

const newPerson = {
    ...person, age: 30
}
console.log(newPerson)

//Rest operator used to merge a list of function arguments into an array
const filter = (...args) => { //three dots are used a rest operator
    return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));

//Easily extract array elements or object properties and store them in variables
//Array Destructuring
[a, , b] = ['Hello', 'Nikos', 'Test']
console.log(a)
console.log(b)


//Object Destructuring
const person = {
    pName: 'Nikos',
    pAge: 30
};
const { pName, pAge } = person;

console.log(pName)
console.log(pAge)

