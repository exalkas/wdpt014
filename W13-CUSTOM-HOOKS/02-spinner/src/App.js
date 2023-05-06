import useInput from "./custom-hooks/useInput";

function App({ children }) {
  const email = useInput("");
  const pass = useInput("");

  return (
    <div>
      <input {...email} />
      <br />
      <input {...pass} />
      <br />
      <button>Login</button>
    </div>
  );
}

export default App;
