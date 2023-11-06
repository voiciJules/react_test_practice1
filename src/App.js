import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 data-testid="counter">{counter}</h1>

      <div>
        <button
          data-testid="minus-button"
          onClick={() => setCounter((count) => count - 1)}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCounter((count) => count + 1)}
          disabled={disabled}
        >
          +
        </button>
      </div>
      <br />
      <button
        data-testid="on/off-button"
        onClick={() => setDisabled(!disabled)}
        style={{ backgroundColor: "blue" }}
      >
        on/off
      </button>
    </div>
  );
}

export default App;
