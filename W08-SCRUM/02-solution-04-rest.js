/**
 * 04
 * Create a function that accepts an arbitrary number of objects as input and combines them into a new object. Students should use the spread operator to combine properties from all input objects. If there are conflicting properties, the function should give priority to the properties of the later objects in the argument list.
 * 
 * combinedObject({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }) // Output: { a: 1, b: 3, c: 4, d: 5 } 
 */

const x = {
    a: 1,
    b: 2
}

x.a = 3
x.a = 334

const arr1 = [1, 2, 3]
arr1[0] = 444

function combinedObject(...objects) {

    console.log("🚀 ~ objects:", objects)

    let result = {}
    
    for ( let i = 0; i < objects.length; i++) {
        
        console.log("🚀 ~ result BEFORE ADDING:", result)
        
        result = {
            ...result,
            ...objects[i]
        }
        console.log("🚀 ~ result AFTER ADDING:", result)
    }
    
}

combinedObject({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 })

function combinedObject2(...objects) {

    console.log("🚀 ~ objects:", objects)

    let result = {}

    objects.forEach(item => {
        result = {
            ...result,
            ...item
        }

    })
    console.log("🚀 ~ result VERSION 2:", result)
    
}

combinedObject2({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 })