// Imports Librairies
import { Route, Routes } from "react-router-dom";

// Imports Components
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/works" element={<Projects />} />
  </Routes>
);

export default AppRoutes;
