import "./assets/style/reset.css";
import "./assets/style/style.scss";
import "./assets/style/responsive.scss";

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProjectYanolja from "./components/pages/ProjectYanolja";

function App() {
  return (
    <Routes>
      <Route path="/Portfolio" element={<Home />} />
      <Route path="/yanolja" element={<ProjectYanolja />} />
      <Route path="/project2" />
      <Route path="/project3" />
      <Route path="/project4" />
      <Route path="/project5" />
      <Route path="/project6" />
    </Routes>
  );
}

export default App;
