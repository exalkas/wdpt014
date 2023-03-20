/**
 * Rest operator = ...
 * Rest operator creates an array
 * 
 * Spread operator = ...
 */

function restDemo (a, b, ...rest) { // At the END of the parameters area in a function
console.log("🚀 ~ rest:", rest)

}

restDemo(1, 2, 3, 4, 5)
restDemo(1, 2, 3,)
restDemo(1,)

/**
 * Spread
 */
const numbers = [1, 2, 3]
console.log("🚀 ~ numbers:", ...numbers)


const string = 'abcde'
console.log("🚀 ~ string:", ...string)


console.log("🚀 ~~~~~~~~~~~~~~~~~~~~~~~")
const array = []
function addToArray(...items) { // REST
    console.log("🚀 ~ items:", items)
    
    array.push(...items) // SPREAD
}
addToArray(2, 2, 34, 5, 6)
console.log("🚀 ~ array:", array)

const address = {
    city: 'berlin',
    country: 'Germany',
    code: '1234'
}
// console.log("🚀 ~ address:", ...address) ERROR

/**
 * Destructuring
 * 
 * It's syntax
 */

const {city, country, code} = address // variable names MUST BE THE SAME as the object properties
console.log("🚀 ~ city, country, code:", city, country, code)

const student = {
    name: 'john',
    age:  undefined, //'123',
    tel: '1234'
}

const age = student.age
// const {age} = student

const {name1} = student
console.log("🚀 ~ test:", name1)

// console.log("🚀 ~ address:", {...address})

const {age: ageNew} = student // destructure object property to another variable with different name than the property
console.log("🚀 ~ ageNew:", ageNew)

const {test = 123} = student // assign default values to destructured variables
console.log("🚀 ~ test:", test)

const {age: age3 = '34'} = student // assign default value to a custom property name
console.log("🚀 ~ age3:", age3)

/**
 * Array destructuring
 */
const numbers2 = [3, 45, 5, 6, 7, 10, 11]

const [first, second, , fourth, ...rest] = numbers2
console.log("🚀 ~ first, second:", first, second, fourth, ...rest)

const arr1 = [2, 45]
const arr2 = [4, 44]

const arr3 = [...arr1, ...arr2] // concatenate arrays
console.log("🚀 ~ arr3:", arr3)

console.log("🚀 ~ min is:", Math.min(...numbers2))
console.log("🚀 ~ min is:", Math.min("123455", "22", "4"))

const newArray = [...numbers2, 100] // adding an element to an array
// numbers2.push(100)
// [3, 45, 5, 6, 7, 10, 11, 100]
console.log("🚀 ~ newArray:", newArray)

const fruits = ['a', 'b', 'c']

const [frA, frB, , fr4 = 'd'] = fruits // assign default value to a destructured variable
console.log("🚀 ~ fruits:", frA, frB, fr4 )

