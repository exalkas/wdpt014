const products = [
    { // 1
        name: "Blue Shirt",
        price: 10
    },
    { // 2
        name: "Hat",
        price: 15
    },
    { // 3
        name: "Coat",
        price: 100
    },
    { // 4
        name: "Ring",
        price: 72
    },
    { // 5
        name: "Bag",
        price: 19
    },
    { // 6
        name: "Scarf",
        price: 9
    },
    { // 7
        name: "Shoes",
        price: 57
    },
    { // 8
        name: "Underware",
        price: 7
    },
    { // 9
        name: "shocks",
        price: 3
    },
    { // 10
        name: "T-shirt",
        price: 50
    }
]

/**
 * Filter method
 * 
 * SYNTAX:
 * 
 * array.filter(function) or array.filter(() => expression) when the expression is true the item is being returned
 * 
 * RETURNS
 * 
 * AN ARRAY
 * 
 */

const mostExpensive = products.filter(product => product.price > 50 )
console.log("🚀 ~ mostExpensive:", mostExpensive)

// arrow function () => 
const cheapest = products.filter(anastasija => anastasija.price < 20 )
console.log("🚀 ~ cheapest:", cheapest)

const filterForLoopArray = []

for (let i = 0; i < products.length; i++) {
    if (products[i].price < 20) filterForLoopArray.push(products[i])
}

console.log("🚀 ~ filterForLoopArray:", filterForLoopArray)

// Products that name begins with 'S'
const sProducts = products.filter(product => product.name[0] === 'S')
console.log("🚀 ~ sProducts:", sProducts)

// Products that contain 'a'
const aProducts = products.filter(product => product.name.includes('ar'))
console.log("🚀 ~ aProducts:", aProducts)

/**
 * MAP 
 * 
 * syntax: array.map(function)
 * 
 * iterates the array and applies to EACH element the change we want to
 * 
 * RETURNS
 * ARRAY
 */

const productsUpdated = products.map(product => product.price += '€')
console.log("🚀 ~ productsUpdated:", productsUpdated)

const numbers = [1, 2, 3, 4, 5]

const numbersSquared = numbers.map(number => number * 2)

const numbersSquaredPlain = numbers.map(function (number) {
    return number * 2
})

console.log("🚀 ~ numbersSquared:", numbersSquared)

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2
}

const testArrowFunction = (mars) => console.log('hello', mars)

testArrowFunction(3)
console.log('*******************************')

/**
 * REDUCE
 * 
 * syntax: array.reduce((accumulator, item) => operation, initial value of the accumulator )
 * 
 * RETURNS: the type of the initial value
 */

const money = [12, 33, 12, 4, 3]

const total = money.reduce((accumulator, value) => accumulator += value, 0)
console.log("🚀 ~ total:", total)

const avg = total / money.length
console.log("🚀 ~ avg:", avg)
console.log('*******************************')
const totalPlain = money.reduce(function (accumulator, value) {
    
    console.log("🚀 ~ accumulator:", accumulator)
    console.log("🚀 ~ value:", value)
    
    return accumulator += value

} , 0)

console.log('*******************************')

/**
 * findIndex
 * 
 * syntax: array.findIndex(() => ...) 
 * returns a number
 */

const idx = products.findIndex((product) => product.name === 'Underware'  )
console.log("🚀 ~ idx:", idx)

products.splice(idx, 1) // deletes the item starting from the index provided and for as many items is the 2nd argument
console.log("🚀 ~ products:", products) // product Underware got deleted

/**
 * find
 * 
 * array.find(() => ...)
 * 
 * return the array item that satisfies given condition
 */

const bag = products.find((product) => product.name === 'Bag')
console.log("🚀 ~ bag:", bag)

const cheap = products.find((product) => product.name.includes('e'))
console.log("🚀 ~ cheap:", cheap)

