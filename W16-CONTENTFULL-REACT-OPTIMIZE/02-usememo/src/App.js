import { useCallback, useEffect, useMemo, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

/**
 * N.B. USE memo to wrap a React component and prevent it from rerendering if the props haven't changed
 *
 * USE useCallback to wrap a function that is being passed through the props so to avoid rerendering
 * USECALLBACK RETURNS A FUNCTION
 *
 *
 * USEMEMO: Returns a value
 * Usage: Wrap a function with useMemo. It's using a dependency array and will executed the wrapped function once the dependent variable(s) change. If there is no change in the dependencies, the wrapped function will not run.
 */

const array = [];

for (let i = 0; i < 10000; i++) {
  array.push(Math.floor(Math.random() * 100));
}
console.log("🚀 ~ array:", array);

function App(props) {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(1000000);

  const [filter, setFilter] = useState(0);

  console.log("🚀 ~ App is RENDERING");

  const handleClick = useCallback((a) => console.log("Button clicked"), []);

  const handleIncrease = useCallback(() => setCounter(counter + 1), [counter]);

  // useCallback returns a function

  // const heavyCalc = useCallback(() => {
  //   console.log("🚀 ~ heavyCalc is RUNNING");
  //   let sum = 0;
  //   for (let i = 0; i < counter; i++) {
  //     sum += i;
  //   }

  //   return sum;
  // }, [counter]);

  const heavyCalc = useMemo(() => {
    console.log("🚀 ~ heavyCalc is RUNNING");
    let sum = 0;
    for (let i = 0; i < counter; i++) {
      sum += i;
    }

    return sum;
  }, [counter]);

  const handleFilter = useCallback(
    (e) => setFilter(parseInt(e.target.value)),
    []
  );

  return (
    <div>
      <Input
        placeholder="type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-red-300"
      />
      <div>
        <Button
          onClick={handleClick}
          text="submit"
          className="border border-red-300"
        />
        <p>Counter: {counter}</p>
        <p>Total is {heavyCalc}</p>
        <hr className="my-8" />
        <Button onClick={handleIncrease} text="increase" />
      </div>
      <hr className="my-8" />
      <Input
        placeholder="type a number"
        value={filter}
        onChange={handleFilter}
      />
      <p>Filtered array:{array} </p>
    </div>
  );
}

export default App;
