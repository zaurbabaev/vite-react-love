import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  function handleReset() {
    setCount(0);
  }
  return (
    <>
      {/* <span className="cross">&times;</span> */}
      {/* <button>Начать</button> */}

      <h1>Vite + React = Love</h1>

      {/* <div className="logo-container">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <p>+</p>
        <img src="/react.svg" className="logo" alt="React logo" />
        <p>=</p>
        <img src="/love.svg" className="logo" alt="Love logo" />
      </div> */}

      <hr />

      <div className="card">
        <p className="count-paragraph">count is {count}</p>
        <div className="increment-buttons">
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleDecrement}>-1</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
