const objectA = {
    address: 'Berlin',
    age: 13
}

const objectB = objectA;
console.log("🚀 ~ objectA:", objectA)
console.log("🚀 ~ objectB:", objectB)
console.log('---------------------')
objectB.age = 33
console.log("🚀 ~ objectA:", objectA)
console.log("🚀 ~ objectB:", objectB)


const arr1 = [1, 2, 3, 4]
const arr2 = arr1

arr1[0] = 100
console.log("🚀 ~ arr1:", arr1, arr2)
