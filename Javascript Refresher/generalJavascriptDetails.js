const myLastName = 'Nikos'
//myLastName = 'Nikos1111' //cannot reassign const 

let myFirstName = 'NickTheGreek' //let save as var but in specific scope
console.log('Variable myFirstName first assignment ' + myFirstName);
myFirstName = 'NickTheGreekTwo'
console.log('Variable myFirstName second assignment ' + myFirstName);

function printMyName(name) {
  console.log(name);
}
printMyName('Nikos from normal function syntax');

//Arrow function equilevant
const printMyNameArrowFunction = (name, age) => console.log(name + " " + age);
printMyNameArrowFunction('Nikos 30 y old from arrow function');

//Syntax when use return and take only one parameter
const multiply = number => number * 2;
console.log(multiply(5));