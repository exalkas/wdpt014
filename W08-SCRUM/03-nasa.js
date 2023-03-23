fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY')
.then(response => response.json())
.then(data => {
    console.log("🚀 ~ data:", data.photos)

    const p = document.createElement('p')
    document.body.appendChild(p)
    
    p.textContent = 'date: ' + data.photos[0].earth_date
    
    const img = document.createElement('img')
    document.body.appendChild(img)
    img.src = data.photos[0].img_src
})