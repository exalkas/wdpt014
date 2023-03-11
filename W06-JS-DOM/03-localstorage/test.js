const address1 = {
    city: 'Berlin',
    country: 'Germany'
}
console.log("🚀 ~ address1:", address1)

// JSON = Javascript Object Notation

// CONVERT  an OBJECT to a STRING 
const addressAsString  = JSON.stringify(address1)
console.log("🚀 ~ addressAsString:", addressAsString)

// CONVERT A STRING to an OBJECT
const objectAgain = JSON.parse(addressAsString)
console.log("🚀 ~ objectAgain:", objectAgain)

// THE SAME WORKS WITH ARRAYS
const numbers = [1, 2, 3, 4]
console.log("🚀 ~ numbers:", numbers)
const numbersAsString = JSON.stringify(numbers)
console.log("🚀 ~ numbersAsString:", numbersAsString)
const arrayAgain = JSON.parse(numbersAsString)
console.log("🚀 ~ arrayAgain:", arrayAgain)
