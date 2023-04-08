import { demo } from "./demoExport.js"

let userData = {
    email: '123',
    pass: 'abc'
}

// userData.email = "fff"

userData = {
    ...userData,
    email: "asd"
}

console.log("🚀 ~ userData:", userData)

demo()