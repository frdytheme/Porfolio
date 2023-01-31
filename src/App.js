import "./assets/style/reset.css";
import "./assets/style/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState, useEffect, useRef } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const getScroll = () => {
    setScrollY(window.scrollY);
  };

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
    window.addEventListener("scroll", getScroll);

    return () => {
      window.removeEventListener("resize", getTitleLine);
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  return (
    <>
      <Header scrollY={scrollY} getTitle={getTitle} />
      <Main mainRef={mainRef} />
      <Footer />
    </>
  );
}

export default App;
