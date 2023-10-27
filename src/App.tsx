// import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Me from "./components/Sections/Me/Me";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header>
        <Navbar />
        <Me />
      </header>
    </div>
  );
}

export default App;
