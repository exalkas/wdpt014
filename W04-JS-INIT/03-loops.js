/**
 * for loop
 * 
 * syntax
 * 
 * for (expression1; expression2; expression3) {
 *  statements
 * }
 * 
 * expression1 => where to start from 
 * expression2 => check if it's true and if it is then do the statements
 * expression3 => after executing the statements, do the expression3
 */

/**
 * increment, decrement operators
 * 
 * ++ increment by one
 * -- decrement by one
 */

for ( let counter = 0; counter < 10; counter++) {

    console.log('alkis')
}

for ( let counter = 10; counter > 0; counter--) {

    console.log('alkis', counter)
}

/**
 * += value is the same like variable = variable + value
 */
for ( let i = 0; i < 10; i += 2 ) {

    console.log('alkis i', i)
}

/**
 * -= value is the same like variable = variable - value
 */
for ( let i = 10; i > 0; i -= 2 ) {

    console.log('alkis - i', i)
}

//
for ( let i = 0; i < 10; i = 10) {

    console.log('alkis - i', i)
}

//
console.log('*******************')
// for ( ; ; ) {

//     console.log('alkis - i')
// }

/**
 * while loop
 * 
 * while (expression) {
 *  statements
 * }
 */

let i = 0;

while (i < 10) {
    console.log(i);

    i++
}

let answer = '1234'

while (answer !== '1234') {
    console.log('What is your password')
}

// for (; i < 20; ) {
//     console.log(i);

//     i++
// }

let k = 50
do {
    console.log(k);
    k++;
} while (k < 60)