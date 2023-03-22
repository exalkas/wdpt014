const promise = new Promise((resolve, reject) => {

    const x = 0
    if (x > 0) {
        reject()
    } else {
        resolve()
    }


})


promise
.then(() => console.log("🚀 ~ promise resolved"))
.catch(() => console.log("🚀 ~ promise REJECTED"))


// someFunction().then().catch()

