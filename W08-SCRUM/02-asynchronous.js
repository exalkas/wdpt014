console.log("🚀 ~ THIS IS A")

function demoAsynchronous() {
    
    setTimeout(() => console.log("🚀 ~ THIS IS B"))
    
    console.log("🚀 ~ THIS IS D")
}

demoAsynchronous()
console.log("🚀 ~ THIS IS C")

const intervalHandler = setInterval(() => console.log('Hello'), 1000)

setTimeout(() => clearInterval(intervalHandler), 5000)