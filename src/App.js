import { useState, useEffect, useLayoutEffect, useRef } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const btnRef = useRef();

  console.log(btnRef.current, "out ref");
  useEffect(() => {
    console.log(btnRef.current, "in ref");
    console.log("inside");
    if (value === 0) {
      window.setTimeout(() => {
        setValue(10 + Math.random() * 2000);
      }, 1000);
    }
  }, [value]);

  console.log("outside");
  useLayoutEffect(() => {
    if (value2 === 0) {
      window.setTimeout(() => {
        setValue2(10 + Math.random() * 2000);
      }, 1000);
    }
  }, [value2]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setValue(0)}>Button</button>
        <p>{value}</p>

        <button onClick={() => setValue2(0)}>Button2</button>
        <p>{value2}</p>

        <button ref={btnRef}>ref test</button>
      </div>
    </>
  );
}

export default App;
