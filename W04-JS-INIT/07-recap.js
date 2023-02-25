/**
 * 7. Write a program that takes in a string and prints a new string with all vowels replaced by the letter 'o'.
 * 
 * e.g. given string 'hello' it should print 'hollo'
 */

const string = 'heleeeeqqqqqloa';

let result = '';

const vowels = 'aeiouAEIOU'

// for (let i = 0; i < string.length; i++) {
    
//     console.log(string[i])

//     // Check if character is a vowel
//     if (vowels.includes(string[i])) {

//         result += 'o'
//     } else {
//         result += string[i]
//     }
//     console.log("🚀 ~ result:", result)
// }

for (let i = 0; i < string.length; i++) {
    
    // console.log(string[i])

    // Check if character is a vowel
    // console.log("🚀 ~ vowels.indexOf(string[i]):", vowels.indexOf(string[i]))
    if (vowels.indexOf(string[i]) > -1) {

        result += 'o'
    } else {
        result += string[i]
    }
}
console.log("🚀 ~ result:", result)
/**
 * 4. Write a program that takes in a string and prints the nu
 * 
 * 
 * E.g. given the string 'hello', the program should print 2
 */
const string4 = 'asdfkjqweaaa'
// const vowels = 'aeiouAEIOU'
let counter = 0;

for (let i = 0; i < string4.length; i++) {
    if (vowels.includes(string4[i])) {
        counter++
    }
    
    
}
console.log("🚀 ~ counter:", counter)

/**
 * 5. Write a program that takes in an array of strings and prints the longest string in the array.
 * 
 * E.g. for given array ['apple', 'banana', 'cherry'] the program should print banana
 */

const arr = ['apple', 'banana', 'cherry'] 
let longestString = '', maxLength = 0;

for (let i = 0; i < arr.length; i++) {
    
    if (arr[i].length >= maxLength) {
        longestString = arr[i]
        maxLength = arr[i].length
    }
}
console.log("🚀 ~ longestString:", longestString)