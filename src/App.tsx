// import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./Routes/Routes";

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
