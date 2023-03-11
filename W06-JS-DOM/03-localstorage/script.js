console.log('normal here')

const div = document.querySelector('#test')
console.log("🚀 ~NORMAL div:", div)

localStorage.setItem('first Item', 5) // WRITE TO LOCALSTORAGE
localStorage.setItem('first Item', 2)
localStorage.setItem('2nd Item', 15)

const result = localStorage.getItem('first Item')// READ FROM LOCALSTORAGE
console.log("🚀 ~ localStorage:", result) 

// STORE AN OBJECT to localstorage
const address1 = {
    city: 'Berlin',
    country: 'Germany'
}

localStorage.setItem('key for address', address1)

const result2 = localStorage.getItem('key for address')
console.log("🚀 ~ result2:", result2 )

// JSON = Javascript Object Notation
const addressAsString  = JSON.stringify(address1)
console.log("🚀 ~ addressAsString:", addressAsString)

localStorage.removeItem('address')
/**
 * NOTES APP
 */
const notes = []

const input = document.querySelector('input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

button.addEventListener('click', () => {

    const note = input.value
    console.log("🚀 ~ note:", note)
    notes.push(note)
    const li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = note
    
    


    localStorage.setItem('notes', JSON.stringify(notes))
})

const notesFromLocalStorage = localStorage.getItem('notes')

const notesArray = JSON.parse(notesFromLocalStorage)
console.log("🚀 ~ notesFromLocalStorage:", notesArray)

notesArray.forEach(item => {

    const li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = item
    notes.push(item)

})