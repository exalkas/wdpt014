/**
 * for of => for (let i of someArray) {}
 * 
 * 
 * for in => for (let i in someObject) {}
 */

const numbers = [1, 2, 3, 4]

for (let item of numbers) {
    console.log("🚀 ~ item:", item)
    
}

const student = {
    address: 'berlin',
    age: 13,
    tel: '123'

}

// ERROR: for of with an object
// for (let item of student) { 
//     console.log("🚀 ~ item:", item)
//     console.log("🚀 ~ item:", student[item])
    
// }


for (let item in student) { // item contains the KEYS
        
        if (item === 'address') console.log("🚀 ~ item:", item, typeof item)
        
        // console.log("🚀 ~ item:", student[item])
        
}


console.log("🚀 ~----------------------")

for (let item in numbers) {// item contains the KEYS - in case of arrays contains the index
    console.log("🚀 ~ item:", item, numbers[item])
    
}