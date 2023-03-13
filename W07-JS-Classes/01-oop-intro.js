const john = {
    age: 13,
    address: 'berlin',
    tel: '1234'
}

const jim = {
    age: 18,
    address: 'paris',
    tel: '12343'
}

/**
 * Classes are kind of blueprint for creating objects
 */
class Student {
    constructor(age, address, tel) { // constructor method will be called EACH TIME an instance of this class will be CREATED
        // console.log("🚀 ~ Student ~ age, address, tel:", age, address, tel)
        // console.log('this is:', this)


        // ASI automatic semicolon Insertion
        this.age = age;
        this.address = address
        this.tel = tel;
    }

    print() { // WE DO NOT PUT 'FUNCTION' AT FRONT OF METHODS 
        console.log('Print here: ', this)
    }
}

const ahmad = new Student(18, 'paris', '1234') // Instance of class Student
const anna = new Student(19, 'berlin', '444')
// console.log("🚀 ~ ahmad:", ahmad)
ahmad.print();
anna.print()

class Food {

    constructor (name, ingredients, category, servings) {
        this.ingredients = ingredients
        this.category = category
        this.servings = servings
        this.name = name

        this.prepared = false
    }

    print() {
        console.log('This is', this)
    }

    prepare() {
        this.prepared = true
        console.log(`🚀 ~ ${this.name} is  prepared`)
    }

    serve() {
        console.log(`🚀 ~ Here is your ${this.name}`)
        console.log(`🚀 ~ Here is your ` +  this.name)
        console.log(`🚀 ~ Here is your`,  this.name)
    }
}

const pizza = new Food('pizza', ['tomato', 'pepper', 'mushroom'], 'lunch', 8)
pizza.print()
pizza.prepare()
pizza.serve()

class Todo {
    constructor(what, who) {
        this.what = what
        this.who = who
        this.completed = false
    }

    completeTask() {
        this.completed = true
    }
}

const swim = new Todo('swim', 'Jim')
console.log("🚀 ~ swim:", swim)
swim.completeTask()
console.log("🚀 ~ swim:", swim)
