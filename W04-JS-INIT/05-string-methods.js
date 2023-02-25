/**
 * When a function is inside an object is called METHOD (it's a property of an object)
 */
// console.log(console)

const product = "toothbrush"

console.log(product.toUpperCase())

for (let i = 0; i < product.length; i++) {
    
    // console.log("🚀 ~ toothbrush:", product[i])
}

/**
 * trim()
 * 
 * it removes leading and trailing empty spaces from a string
 */
const username = ' alkas123   '
console.log("🚀 ~ username:", username.trim() + 's')

/**
 * substring(startingIndex, endingIndex)
 * 
 * ***endingIndex is not included
 * it returns the specified part of a string
 */
const email = 'john@example.com'
console.log("🚀 ~ email:", email.substring(5, 7))

const position  = email.indexOf('@')
console.log("🚀 ~ position:", position)
console.log("🚀 ~ DOMAIN is:", email.substring(position + 1))
console.log("🚀 ~ DOMAIN is:", email.substring(email.indexOf('@') + 1))

/**
 * template strings
 */

const age = 3;

const str = `The quick brown fox jumps over the lazy dog. And it is ${age} and the length of the email above is ${email.length} dsafadsf ${2 + 3}`;

const noTemplate = 'The quick brown fox jumps over the lazy dog. And it is ' + age + ' and the length of the email above is ' + email.length + ' dsafadsf ' + (2 + 3)

console.log("🚀 ~ str:", str)

/**
 * ternary operator: expression ? expression if true : expression if false
 * 
 * ternary = 3
 */

age > 18 ? console.log('You are an adult') : console.log('You are a kid or a teenager')

const message = `Welcome to our site! ${age > 18 ? 'Find your best friends here' : 'With you parents help have a look around'}`;

console.log("🚀 ~ message:", message)
