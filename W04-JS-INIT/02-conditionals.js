/**
 * string access
 */

const address = "Berlin Germany"
console.log("🚀 ~ address:", address[4])

// characters in a string CANNOT be changed
address[4] = 'a'
console.log("🚀 ~ address:", address[4])
console.log("🚀 ~ address:", address.length)

/**
 * CONDITIONALS
 * 
 * Syntax
 * 
 * if (expression) {
 *  instructions if expression is a truthy value
 * } else {
 *  instructions if expression is false
 * }
 */

/**
 * truthy values
 * 
 * any value that is NOT 
 * 0
 * undefined
 * null
 * false
 * 
 * e.g. "John" is a truthy value
 * true is a truthy
 */

const age = -52;

if (age == 52) {

    console.log('You are an adult')
}

/**
 * falsy values
 * 
 * 0
 * false
 * undefined
 * null
 */

if (age == -52) {
    console.log('This isnt an age, this is cold')
}

const myName = 'john'

if (myName) {
    console.log('This will execute on truthy values')
}

/**
 * equality operators
 * 
 * ==, === 
 * 
 * == => equality operator (regardless of their type)
 * === => strong equality operator (checks the type too)
 * 
 * !=, !== 
 */

if (5 == '5') {
    console.log('THEY ARE EQUAL')
}

if (5 === '5') {
    console.log('THEY ARE EQUAL')
}

if (5 != '5') {
    console.log('THEY ARE EQUAL !=')
}

if (5 !== '5') {
    console.log('THEY ARE EQUAL !==')
}

const weather = 'cloudy'

if (weather == 'sunny') {
    console.log('Wear a T-Shirt')
} else if (weather == 'rainy'){
    console.log('Wear a raincoat')
} else if (weather == 'freezing'){
    console.log('Wear a coat')
} else {
    
    console.log('Cannot help, wear anything')
}

/**
 * SWITCH STATEMENT
 */

switch (weather) {
    case 'sunny':
        console.log('Wear a T-Shirt')
        break;
    case 'rainy':
        console.log('Wear a raincoat')
        break;
    case 'freezing':
        console.log('Wear a coat')
        break;

    default:
        console.log('Cannot help, wear anything')
        break;
}

/**
 * COMPARISON OPERATORS
 * 
 * >, <, >=, <=
 */

const newAge = 40

if (newAge >= 40 ) {
    console.log('You are a middle age man')
}