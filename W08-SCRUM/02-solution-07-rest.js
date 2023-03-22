/**
 * 07
 * Create a function that updates the property of an object without modifying the original object
 * 
 * updateProperty({ a: 1, b: 2 }, 'b', 3) // Output: { a: 1, b: 3 }
 * 
 */

function updateProperty(object, property, value) {

    const newObject = {...object}

    newObject['ddd'] = 123123
    newObject.property  = 123123231132
    newObject[property] = value
    console.log("🚀 ~ newObject:", newObject)

    
}

updateProperty({ a: 1, b: 2 }, 'b', 3)