fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(response => {
    console.log("🚀 ~ response:", response)
    
    return response.json()
}).then((data) => {

    console.log("🚀 ~ data:", data)
    
    const p = document.createElement('p')
    document.body.appendChild(p)
    
    p.textContent = data.meals[0].strMeal
    
    const img = document.createElement('img')
    document.body.appendChild(img)
    img.src = data.meals[0].strMealThumb
    
}).catch(error => console.log('Error', error))