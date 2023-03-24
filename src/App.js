import "./assets/style/reset.css";
import "./assets/style/style.scss";
import "./assets/style/responsive.scss";

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
