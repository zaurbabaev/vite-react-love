import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleMouseEnter(item) {
    setActiveItem(item);
  }

  function handleMouseLeave() {
    setActiveItem(null); 
  }

  console.log(isOpen);

  return (
    <>
      {isOpen ?
        <span onClick={toggleIsOpen} className="cross">
          &times;
        </span>
      : <button onClick={toggleIsOpen}>Начать</button>}

      {isOpen && (
        <>
          <h1>Vite + React = {count >= 3 ? "Love" : ""}</h1>
          <div className="logo-container">
            <img
              onMouseEnter={() => handleMouseEnter("vite")}
              onMouseLeave={handleMouseLeave}
              src="/vite.svg"
              className={`logo ${count >= 1 || activeItem === "vite" ? "active" : ""}`}
              alt="Vite logo"
            />
            <p>+</p>
            <img
              onMouseEnter={() => handleMouseEnter("react")}
              src="/react.svg"
              className={`logo ${count >= 2 || activeItem === "react" ? "active" : ""}`}
              alt="React logo"
            />
            <p>=</p>
            <img
              onMouseEnter={() => handleMouseEnter("love")}
              onMouseLeave={handleMouseLeave}
              src="/love.svg"
              className={`logo ${count >= 3 || activeItem === "love" ? "active" : ""}`}
              alt="Love logo"
            />
          </div>
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
      )}
    </>
  );
}

export default App;
