import {useEffect, useState} from 'react'

export default function App () {

  const [todo, setTodo] = useState({})

  const [counter, setCounter ] = useState(0)
  
/**
 * useEffect(function, dependency array)
 * 
 * dependency array:
 * [] = run ONLY ONCE at the beginning
 * no array = run AFTER EVERY RENDER
 * [some variable] = runs after the specific variable changes
 */

const [counter2, setCounter2 ] = useState(0)


useEffect(() => {
  console.log('USE EFFECT 1 RAN')
  // 
}, [])

useEffect(() => {

  async function getData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("🚀 ~ response:", response)
    
    const data = await response.json()
    console.log("🚀 ~ data:", data)

    setTodo(data)
  }

  getData()
}, [])


useEffect(() => {
  
  console.log('USE EFFECT 2 RAN')
})


const handleClick = () => {
  setCounter(counter + 1);
  setCounter2(counter2 + 1)
}
console.log('component will RENDER')
  return (
    <div>
      {
        todo.title
      }
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}


// THIS IS A PURE FUNCTION BECAUSE GIVEN THE SAME INPUT WILL ALWAYS PRODUCE THE SAME OUTPUT
function pure(price, vat) {
  return price * vat
}

const vat = 0.19

function dirty(price){
  return price * vat
}