import { useContext } from "react";
import {CounterContext} from './components/CounterContext'

function App({children}) {

  const {counter, increase, decrease} = useContext(CounterContext)

  return (
    <div>
      Counter: {counter}
      <br />
      <button onClick={increase}>Increase</button>
      <br />
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;