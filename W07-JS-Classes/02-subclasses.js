class Person {
    constructor(name, address, email) {
        this.name = name
        this.address = address
        this.email = email
    }
    
    print() {
        
        console.log("🚀 ~ Person is", this.address,  this.email, this.name)       
        
    }
}

class Teacher extends Person {

    constructor(name, address, email, course) {

        super(name, address, email)
        this.course = course
    }
   
    print() {
        console.log("🚀 ~ Teacher is", this.address,  this.email, this.name, this.course)  
    }
}

const alkis = new Teacher('alkis', 'greece', 'a@school.com', 'mern')
// console.log("🚀 ~ alkis:", alkis)
alkis.print()

class Student {

    constructor(name, address, email) {
        this.name = name
        this.address = address
        this.email = email
    }
}