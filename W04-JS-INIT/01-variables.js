// Single Line comment
/*
Multi Line comment


*/

/**
 * Multi line comments 
 * 
 * 
 */

// pizzaSlices is the VARIABLE NAME. "8" is the value
// "=" is called operator
// "=" is an assignment operator
let pizzaSlices = 8;
pizzaSlices = 8055;
console.log("Slices: ", pizzaSlices, " test");

const people = 2;

console.log(people)

/**
 * "(" = parenthesis
 * "[" = square bracket
 * "{" = curly brace
 */

var someVariable = 23;
someVariable = 11

vairableWithoutType = 1212

/**
 * Variable Declaration rules
 * 
 * myVariable -> camelCase -> JS
 * MyVariable -> PascalCase
 * my_variable -> snake_case
 */

/**
 * Semi colon: ;
 * 
 * ASI = Automatic Semicolon Insertion
 */

/**
 * Data types
 * 
 * Numbers => 1, 23.45, 0
 * String => "double quotes" 'single quotes' `backticks`
 */

const myName = "alkis"
const myName2 = 'alkis'
const myName3 = `alkis`

const age = 5
const years = '25';

console.log("total is", age + years)

// JS IS NOT A TYPED LANGUAGE
let name1 = 12
name1 = 'fjhf'

// boolean
const smoker = true;
const drinks = false;

// undefined
let numberOfBirds;
console.log("numberOfBirds", numberOfBirds)

// null => INTENTIONALLY LEFT EMPTY
let empty = null;
console.log("empty", empty)

// CONST VARIABLES MUST ME INITIALIZED
// const newVar;

/**
 * EXPRESSIONS
 * 
 * code that is being executed at place
 */

// pizzaSlices / people is an expression
// "/" is an operator
// people and pizzaSlices are Operands
const slicesPerPerson = pizzaSlices / people;

console.log('Slices per person:', slicesPerPerson)
console.log('Type:', typeof slicesPerPerson)

// Operator Precedence
const total = (2 + 2) * 2 - 2;
console.log('total:', total)

/**
 * DATA STRUCTURES
 */

const address = "athens"
const tel = '123'
const nameStudent = 'alkis'

// Objects
const student = {
    address: 'Athens',
    tel: "456",
    name: 'alkis'
}

console.log('Student is', address , tel , nameStudent)
console.log('Student is', student)
console.log('Address is', student.address)

const emptyObject = {}
console.log('emptyObject is', emptyObject)
emptyObject.newProperty = 123
console.log('emptyObject is', emptyObject)

// Arrays
const favFruits = ['apples', 'cherries', 'bananas']
console.log('First element is', favFruits[0])
console.log('First element is', favFruits[2])