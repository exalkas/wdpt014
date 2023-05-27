import { useCallback, useEffect, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

/**
 * N.B. USE memo to wrap a React component and prevent it from rerendering if the props haven't changed
 *
 * USE useCallback to wrap a function that is being passed through the props so to avoid rerendering
 *
 */

function App(props) {
  const [text, setText] = useState("");

  console.log("🚀 ~ App is RENDERING");

  const handleClick = useCallback((a) => console.log("Button clicked"), []);
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
      </div>
    </div>
  );
}

export default App;
