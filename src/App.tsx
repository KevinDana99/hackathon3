import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("hello world");
  return (
    <>
      <h1 className="text-3xl font-bold bg-red-300">{state}</h1>
    </>
  );
}

export default App;
