import Main from "./components/main/Main";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <Main />;
}

export default App;
