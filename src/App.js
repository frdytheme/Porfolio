import "./assets/style/reset.css";
import "./assets/style/style.scss";
import "./assets/style/responsive.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect, useRef } from "react";

function App() {
  const mainRef = useRef(null);
  const getTitle = useRef([]);

  const getTitleLine = () => {
    getTitle.current = [0];
    const articles = mainRef.current.querySelectorAll(".headline");
    articles.forEach((art) => {
      getTitle.current = [...getTitle.current, art.offsetTop];
    });
  };

  const slideUpTitle = () => {
    let titleLine = getTitle.current.filter((top) => top !== 0);
    titleLine = [...titleLine, document.documentElement.offsetHeight];
    const scrollY = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const titleEle = mainRef.current.querySelectorAll(".headline");
    titleEle.forEach((title, idx) => {
      if (
        scrollY >= titleLine[idx] - clientHeight / 1.5 &&
        scrollY <= titleLine[idx + 1] - clientHeight / 1.5
      ) {
        title.classList.add("over");
      } else {
        title.classList.remove("over");
      }
    });
  };

  useEffect(() => {
    getTitleLine();
    window.addEventListener("resize", getTitleLine);
    window.addEventListener("scroll", slideUpTitle);
    return () => {
      window.removeEventListener("resize", getTitleLine);
      window.removeEventListener("scroll", slideUpTitle);
    };
  }, []);

  return (
    <>
      <Header getTitle={getTitle} mainRef={mainRef} />
      <Main mainRef={mainRef} />
      <Footer />
    </>
  );
}

export default App;
