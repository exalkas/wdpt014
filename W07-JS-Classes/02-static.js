/**
 * STATIC Methods
 * 
 * we can call them ONLY from the class
 * AND NOT FROM AN INSTANCE
 */
console.log(Math.ceil(Math.random() * 100) )

class DOM {

    print() {
        console.log('Hello from DOM instance')
    }

    static add(type, parent) {

        const element = document.createElement(type)
        parent.appendChild(element)
    }
}

const div = new DOM()
div.print()

const test = document.createElement('div')
document.body.appendChild(test)
DOM.add('div', test)
// DOM.print()
// const test = new Math()

const now = new Date()
console.log("🚀 ~ now:", now.getTime()) // INSTANCE METHOD
// console.log("🚀 ~ now:", now.now()) // ERROR. .now() 

console.log("🚀 ~ now:", Date.now()) // STATIC METHOD

