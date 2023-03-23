fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        email: 'john',
        password: '1234'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then(response => response.json())
.then(data => {
    console.log("🚀 ~ data:", data)
    
})


eval('const x = 2; console.log("x is ", x + 3);')