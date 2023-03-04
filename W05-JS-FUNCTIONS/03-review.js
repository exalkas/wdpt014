/**
 * Scope
 */

const globalScope = 10; // Here is global scope



function testingScope() {

    console.log("🚀 ~ globalScope:", globalScope)
}

function functionScope() {
    const globalScope = 5;
    console.log("🚀 ~ globalScope LOCALLY:", globalScope)
    const localScope = 3;
    console.log("🚀 ~ localScope:", localScope)
}

// console.log("🚀 ~ localScope:", localScope) // localscope is undefined error

testingScope()
functionScope()

// block scope
if (true) {
    const blockScope = 4;
    var test = 2
    console.log("🚀 ~ blockScope:", blockScope)
    
}

{
    const blockScope = 4;
    console.log("🚀 ~ blockScope:", blockScope, test)
}
// console.log("🚀 ~ blockScope:", blockScope)

console.log([1, 2, 3, 4].map(number => number + 1).filter(number1 => number1 > 4))
console.log([1, 2, 3, 4].map(function(number){ return number + 1}).filter(function(number){return number > 4}));

function addOne(number){ return number + 1}
function filter4(number){return number > 4}
console.log([1, 2, 3, 4].map(addOne).filter(filter4));

/**
 * 10 Create a function countWords that takes an array of strings and returns the total number of words using reduce
 * 
 * Example usage: countWords(["hello world", "goodbye", "how are you?"]); // Output: 6
 * 
 */
const string = "hello world"
let spaces = 0
for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') spaces++
}
console.log("🚀 ~ spaces:", spaces)

function countWords(array) {

    console.log("🚀 ~ array:", array.reduce((acc, item) => {

        let spaces = 0
        for (let i = 0; i < item.length; i++) {
            if (item[i] === ' ') spaces++
        }

        return acc += spaces + 1
    }, 0))

}
countWords(["hello world", "goodbye", "how are you?"]); // 6

/**
 * split method (strings) returns an ARRAY
 */
console.log("🚀 ~ how are you?:", "how are you?".split(' are ') )
console.log("🚀 ~ how are you?:", "how are you?".split('') )

//**************************************** */

function countWordsSplit(array) {

    console.log("🚀 ~ array:", array.reduce((acc, item) => {

        return acc += item.split(' ').length
    }, 0))

}
countWordsSplit(["hello world", "goodbye", "how are you?"]); // 6

/**
 * Unshift => adds an item to an array at the beginning
 * array.unshift
 * 
 * returns the length of the array
 */

const unshiftDemo = [2, 3, 4]

unshiftDemo.unshift(1)

console.log('unshift:', unshiftDemo )

unshiftDemo.shift() // REMOVES FIRST ITEM OF THE ARRAY
console.log('unshift:', unshiftDemo )

unshiftDemo.pop() // REMOVES THE LAST ELEMENT
console.log('unshift:', unshiftDemo )

// array[index] = someValue
unshiftDemo[0] = 'hello'
console.log('unshift:', unshiftDemo )

const address = {
    street: 'berlin',
    number: 22,
    code: 1234
}
console.log("🚀 ~ address:", address.street) // berlin

const property = 'street'
console.log("🚀 ~ address:", address[property])// berlin
console.log("🚀 ~ address:", address['street'])// berlin
