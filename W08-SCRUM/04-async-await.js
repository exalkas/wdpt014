/**
 * async / await
 */

async function fetchData() {

    try {
        
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    
        // console.log("🚀 ~ response:", response)
    
        const data = await response.json()
        // console.log("🚀 ~ data:", data)
    
        const p = document.createElement('p')
        document.body.appendChild(p)
        
        p.textContent = data.meals[0].strMeal
        
        const img = document.createElement('img')
        document.body.appendChild(img)
        img.src = data.meals[0].strMealThumb

    } catch (error) {
        console.log("🚀 ~ error:", error)
        
    }
}

fetchData()

async function getNasaData() {

    try {
        
        const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY')
        console.log("🚀 ~ response:", response)
    
        // const data = await response.json()
        // console.log("🚀 ~ data:", data)
        
    
        const p = document.createElement('p')
        document.body.appendChild(p)
        
        p.textContent = 'date: ' + response.data.photos[0].earth_date
        
        const img = document.createElement('img')
        document.body.appendChild(img)
        img.src = response.data.photos[0].img_src

    } catch (error) {
        console.log("🚀 ~ error:", error)
        
    }

}

getNasaData()