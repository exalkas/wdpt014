import { useState } from "react";

export default function App() {

  // useState RETURNS
  // a variable, and a function to update the variable
  // useState(initital value)
  let [counter, setCounter] = useState(0)

  let [firstName, setFirstName] = useState('')

  // let counter = 0;

  const handleClick = () => {

    // counter++;
    setCounter(counter += 1)
    // console.log("🚀 ~ counter:", counter)
    
  }
  
  
  console.log("🚀 ~ COMPONENT RENDERED")

  return (
    <div>

      <input 
        value={firstName} 
        onChange={e => setFirstName(e.target.value)}
      />

      Counter: {counter}
      <br />
      <button onClick={handleClick}>Increase</button>
      <button onClick={() => setCounter(counter -= 1)}>Decrease</button>
      Hello {firstName}
    </div>
  )
}

function customUseState(initialValue) {

  const variable = initialValue
  return [variable, (variable) => variable ]
}

const [someVariable, someFunction] = customUseState(0)