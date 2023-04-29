import { useReducer } from "react";

function App({children}) {

  const reducer = (state, action) => {

    switch (action.type) {
      case 'INCREMENT':
        
        return state + 1;
      case 'DECREASE':
        
        return state - 1;
    
      case 'RESET':
        
        return 0;
    
      default:
        return state;
    }
  }

    // const handleIncrease = () => setCounter(counter + 1)
    // const handleDecrease = () => setCounter(counter - 1)
    // const handleReset = () => setCounter(0)

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      Counter: {counter}
      <br />
      <button onClick={() => dispatch({type: 'INCREMENT'}) }>Increase</button>
      <br />
      <button onClick={() => dispatch({type: 'DECREASE'}) }>Decrease</button>
      <br />
      <button onClick={() => dispatch({type: 'RESET'}) }>RESET</button>
    </div>
  );
}

export default App;