import { useState } from "react";
import adsoLogo from "./assets/adso.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://serviciosfinancierosena.blogspot.com/" target="_blank">
          <img src={adsoLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola Chicos ADSO feliz Navidad</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          El contador esta en {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
