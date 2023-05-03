import useToggle from "../custom-hooks/useToggle";

function ToggleMe(props) {
  const [toggle, change] = useToggle(false);

  return (
    <>
      <div
        style={{
          height: "400px",
          width: "400px",
          background: toggle ? "white" : "black",
        }}
      ></div>
      <button onClick={change}>Dark/light</button>
    </>
  );
}

export default ToggleMe;
