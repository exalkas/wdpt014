/**
 * 
 */

const fruits = ['apple', 'banana', 'orange']

fruits.push('kiwi')

fruits.push('cherry')

console.log("🚀 ~ fruits:", fruits)

for (let i = 0; i < fruits.length; i++) {
    
    const lengthOfString = fruits[i].length

    const fruit = fruits[i]

    const firstLetter = fruit[0]
    // console.log("🚀 ~ firstLetter:", firstLetter)
    
    if (lengthOfString < 6 || firstLetter == 'c') {

        console.log("🚀 ~ fruits:", fruits[i])
    }
}

const num1 = 5
const num2 = 7

if (num1 < num2 ) {
    console.log(num2)
} else {
    
    console.log(num1)
}

if ( num2 < num1) {
}