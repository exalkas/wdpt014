let counter = 0;

const button = document.getElementById('addCart')
console.log("🚀 ~ button:", button)

// button.onclick = function () {alert('add to cart clicked')}

// button.addEventListener('click', () => {
//     console.log('First event listener')
// })

// function add2Numbers () {
//     console.log(1 + 2)
// }

// button.addEventListener('click', () => {
//     console.log('Second event listener')
// })
// button.addEventListener('click', add2Numbers)

const cart = document.querySelector('.items')
console.log("🚀 ~ cart:", cart)

function increase() {
    counter++;

    console.log("🚀 ~ counter:", counter)

    cart.textContent = counter

}

button.addEventListener('click', increase)

const form = document.querySelector('form')
console.log("🚀 ~ form:", form)

const name = document.querySelector('.name')
const email = document.querySelector('.email')

form.addEventListener('submit', (e) => {
    console.log("🚀 ~ e:", e)
    
    console.log("🚀 ~ name:", name.value)
    console.log("🚀 ~ email:", email.value)
    

    console.log('form submitted')
    
    e.preventDefault()
})

const remover = document.getElementById('remove')

remover.addEventListener('click', () => {

    button.removeEventListener('click', increase)
})