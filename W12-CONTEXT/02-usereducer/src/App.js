import { useContext } from "react";
import {CounterContext} from './components/CounterContext'

function App({children}) {

  const {counter, dispatch} = useContext(CounterContext)

  return (
    <div>
      Counter: {counter}
      <br />
      <button onClick={() => dispatch({type: "INCREMENT"})}>Increase</button>
      <br />
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrease</button>
      <br />
      <button onClick={() => dispatch({type: 'MULTIPLY'})}>MULTIPLY</button>
      <br />
      <button onClick={() => dispatch({type: 'DIVIDE'})}>DIVIDE</button>
    </div>
  );
}

export default App;