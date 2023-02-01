import "./assets/style/reset.css";
import "./assets/style/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect, useRef } from "react";

function App() {
  const mainRef = useRef(null);
  const getTitle = useRef([]);
  let articles = null;

  const getTitleLine = () => {
    getTitle.current = [0];
    articles = mainRef.current.querySelectorAll(".headline");
    articles.forEach((art) => {
      getTitle.current = [...getTitle.current, art.offsetTop];
    });
  };

  useEffect(() => {
    getTitleLine();
    window.addEventListener("resize", getTitleLine);
    return () => {
      window.removeEventListener("resize", getTitleLine);
    };
  }, []);

  return (
    <>
      <Header getTitle={getTitle} />
      <Main mainRef={mainRef} />
      <Footer />
    </>
  );
}

export default App;
