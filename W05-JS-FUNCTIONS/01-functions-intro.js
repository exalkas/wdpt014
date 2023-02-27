/**
 * function nameFuntion () {
 * 
 * 
 * }
 */
helloWorld() // HOISTING = functions may be called before they get initialized

function helloWorld() { // Function DECLARATION

    console.log('Hello from a function')
}

// call/execute the function
helloWorld() 

function sumTwoNumbers(numA, numB) { // numA and numB are PARAMETERS. THEY ARE LIKE VARIABLE NAMES
    console.log("🚀 ~ numA, numB:", numA + numB)

}

sumTwoNumbers(2, 3) // 2 and 2 are called ARGUMENTS and they are the values

function calcProduct(numA, numB) {

    return numA * numB // returns to the CALLER of the function the value that comes after the command
}

console.log(calcProduct(2, 5))

function calcProduct2(numA, numB) {

    const total = numA * numB // returns to the CALLER of the function the value that comes after the command
}

console.log(calcProduct2(2, 5)) // function does not return anything (undefined)

// DRY = Don't Repeat Yourself

/**
 * 01 easy
 * Crate an array named myLuckyNumbers with the following numbers: 1,2,3,4,5,6,7,8,9,10
 * Create a function that sums all the numbers of the array
 */
const numbers = [1,2,3,4,5,6,7,8,9,10];

function myLuckyNumbers() {

    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        
        sum += numbers[i]           
    }

    console.log('total = ', sum)
}

myLuckyNumbers()

const address = {
    street: 'Garlic',
    code: 19909,
    city: 'Berlin',
    sum: function() {
        console.log('Hello World from my first METHOD')
    }
}

address.sum()

/**
 * 02 easy
 * Write a function toArray that takes 2 values and returns these values in an array.
 * Example: toArray(5, 9) should return the array [5, 9]
 */

function toArray(value1, value2) {

    // const array = []

    // array.push(value1, value2)

    // return array

    return [value1, value2]
}

console.log(toArray(1, 1))

/**
 * 03 easy
 * Write a function getFirstElement that takes an array and returns the first element of the array.
 * Example: getFirstElement([1, 2]) should return 1
 */

function getFirstElement(array) {

   return  array[0]
}

console.log(getFirstElement(['a', 2]))

/**
 * ARROW FUNCTIONS
 * 
 * const arrowFunction = () => {
 * 
 * }
 * 
 */
const getFirstElementArrow = (array) => {
    return  array[0]
}

console.log("🚀 ~ getFirstElementArrow:", getFirstElementArrow(['first', 'second']))

// WHEN ONLY ONE INSTRUCTION, you can SKIP THE {} and THE RETURN
const noCurlyBraces = (array) => array[0]
console.log("🚀 ~ noCurlyBraces:", noCurlyBraces(['arr1', 'arr2']))
// WHEN ONLY ONE PARAMETER, WE CAN SKIP THE PARENTHESIS
const noParenthesis = array => array[0]
console.log("🚀 ~ noParenthesis:", noParenthesis([1111, 2]))

/**
 * Higher Order Functions = functions that ACCEPT ANOTHER FUNCTION
 */

function addMe(num1, num2) {
   return num1 + num2
    
}

function minusMe(num1, num2) {
   
    return num1 - num2
}

function hof(parameter1, num1, num2) {
    
    if (num1 > num2) {
        return parameter1(num1, num2)
    } else {
        return parameter1(num2, num1)
    }
}

hof(addMe, 1, 2)
console.log(hof(minusMe, 1, 5))


console.log(hof((num1, num2) => num2 - num1, 1, 5))



/**
 * array.forEach(accepts a function)
 */

const luckyNumbers = [2, 8, 3, 7, 8, 13, 67]

luckyNumbers.forEach((element) => console.log('El is', element))

luckyNumbers.forEach((element) => {
    
    console.log('My lucky number is ', element)
})

luckyNumbers.forEach(function (element) {
    console.log('Normal Function', element)
})

function outside(element) {
    console.log('Outside', element)
}

luckyNumbers.forEach(outside)