const recipe = {
      "idMeal": "52818",
      "strMeal": "Chicken Fajita Mac and Cheese",
      "strDrinkAlternate": null,
      "strCategory": "Chicken",
      "strArea": "American",
      "strInstructions": "Fry your onion, peppers and garlic in olive oil until nicely translucent. Make a well in your veg and add your chicken. Add your seasoning and salt. Allow to colour slightly.\r\nAdd your cream, stock and macaroni.\r\nCook on low for 20 minutes. Add your cheeses, stir to combine.\r\nTop with roasted peppers and parsley.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
      "strTags": "Pasta,Cheasy,Meat",
      "strYoutube": "https://www.youtube.com/watch?v=bwTSmLTZKNg",
      "strIngredient1": "macaroni",
      "strIngredient2": "chicken stock",
      "strIngredient3": "heavy cream",
      "strIngredient4": "fajita seasoning",
      "strIngredient5": "salt",
      "strIngredient6": "chicken breast",
      "strIngredient7": "olive oil",
      "strIngredient8": "onion",
      "strIngredient9": "red pepper",
      "strIngredient10": "garlic",
      "strIngredient11": "cheddar cheese",
      "strIngredient12": "parsley",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "500g",
      "strMeasure2": "2 cups",
      "strMeasure3": "1/2 cup",
      "strMeasure4": "1 packet",
      "strMeasure5": "1 tsp",
      "strMeasure6": "3 diced",
      "strMeasure7": "2 tbsp",
      "strMeasure8": "1 small finely diced",
      "strMeasure9": "2 finely diced",
      "strMeasure10": "2 cloves minced",
      "strMeasure11": "1 cup",
      "strMeasure12": "garnish chopped",
      "strMeasure13": "",
      "strMeasure14": "",
      "strMeasure15": "",
      "strMeasure16": "",
      "strMeasure17": "",
      "strMeasure18": "",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "http://twistedfood.co.uk/chicken-fajita-mac-n-cheese/",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": null
}
/**
 * Class Object
 * 
 * Methods: 
 * Object.entries(some Object) returns an Array with the keys and the values from the Object
 * Object.keys(some Object) returns an Array with the keys from the Object
 * Object.value(some Object) returns an Array with the values from the Object
 */

const entries = Object.entries(recipe) // this is a ARRAY
// console.log("🚀 ~ entries:", entries)

for (let i = 0; i < entries.length; i++) {

    if (entries[i][0].includes('strIngre') && entries[i][1] !== '') console.log("🚀 ~ Item is:", entries[i][0], "with value", entries[i][1])
    
}

const keys = Object.keys(recipe)
console.log("🚀 ~ keys:", keys)

for (let i = 0; i < entries.length; i++) {
    
    console.log("🚀 ~ Item is:", keys[i], "with value", recipe[keys[i]] )
}

console.log("🚀 ~ recipe.idMeal:", recipe.idMeal)

const randomProperty = "idMeal"

console.log("🚀 ~ recipe[idMeal]:", recipe[randomProperty])

const values = Object.values(recipe)
console.log("🚀 ~ values:", values)
