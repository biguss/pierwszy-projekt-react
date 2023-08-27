import React, { useState } from "react";
import Button from "./components/Button";
import Outcome from "./components/Outcome";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button setCount={setCount} />
      <Outcome count={count} />
    </div>
  );
}

export default App;
