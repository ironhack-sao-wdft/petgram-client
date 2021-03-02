import { useState } from "react";

function HookCounter() {
  const [state, setState] = useState(0);

  function handleIncrement() {
    setState(state + 1);
  }

  function handleDecrement() {
    setState(state - 1);
  }

  return (
    <div className="m-3">
      <button onClick={handleDecrement} className="btn btn-primary">
        -
      </button>
      <span className="display-3 mx-3">{state}</span>
      <button onClick={handleIncrement} className="btn btn-primary">
        +
      </button>
    </div>
  );
}

export default HookCounter;
