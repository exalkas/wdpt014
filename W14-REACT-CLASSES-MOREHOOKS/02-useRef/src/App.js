import { useEffect, useId, useRef } from "react";

function App({ children }) {
  const id = useId();
  // const id2 = useId();
  console.log("🚀 ~ id:", id);

  /**
   * useRef
   *
   * syntax: const someVar = useRef(initialvalue)
   */
  const elementReference = useRef();
  const counter = useRef(0);
  const value = useRef();
  console.log("🚀 ~ value:", value);
  console.log("🚀 ~ elementReference:", elementReference);

  useEffect(() => {
    elementReference.current.focus();
  }, []);

  const handleClick = () => {
    counter.current++;
    console.log("🚀 ~ counter.current:", counter.current);
  };

  const handleOnchange = (e) => (value.current = e.target.value);
  return (
    <div>
      <input
        ref={elementReference}
        className="border-black border-[1px]"
        id={id}
      />
      <input ref={value} className="border-black border-[1px]" id={id} />
      <button onClick={handleClick}>Increase</button>
      <button onClick={() => console.log(value.current.value)}>Submit</button>
    </div>
  );
}

export default App;
