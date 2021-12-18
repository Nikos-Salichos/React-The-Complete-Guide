//Primitive type are numbers,strings,booleans whenever you reassign a variable it will copy the value
const number = 1;
const num2 = number;

console.log(num2);

//Objects and arrays are reference types
const person = { name: 'Nikos' }
const secondPerson = person; //create a pointer to original person

//Technique to copy the object
const thirdPerson = {
    ...person
}
