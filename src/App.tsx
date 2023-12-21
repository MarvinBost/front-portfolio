// import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./Routes/Routes";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
