import "./assets/style/reset.css";
import "./assets/style/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isScroll, setIsScroll] = useState(0);

  const headLine = useRef([]);
  const mainRef = useRef(null);

  const getScroll = () => {
    const scrollY = window.scrollY;
    setIsScroll(scrollY);
  };

  const getHeadLine = () => {
    headLine.current = [0];
    const articles = mainRef.current.querySelectorAll(".headline");

    articles.forEach((article) => {
      headLine.current = [...headLine.current, article.offsetTop];
    });
    console.log(headLine);
  };

  useEffect(() => {
    getHeadLine();
    window.addEventListener("resize", getHeadLine);
    window.addEventListener("scroll", getScroll);

    return () => {
      window.removeEventListener("resize", getHeadLine);
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  return (
    <>
      <Header isScroll={isScroll} headLine={headLine.current} />
      <Main isScroll={isScroll} mainRef={mainRef} />
      <Footer />
    </>
  );
}

export default App;
