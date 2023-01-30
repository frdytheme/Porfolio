import { useEffect, useRef, useState } from "react";
import "../assets/style/header.scss";

function Header({ isScroll, headLine }) {
  const gnb = useRef(null);
  const [navPos, setNavPos] = useState(70);

  // 간헐적 헤더 렌더링 겹침.

  // const getOffsetTop = () => {
  //   const gnbOffsetTop = gnb.current.offsetTop;
  //   setNavPos(gnbOffsetTop);
  //   if (isScroll - navPos) {
  //     gnb.current.className = "";
  //   } else {
  //     gnb.current.className = "scrolled";
  //   }
  // };

  const moveHeadLine = () => {
    const divs = gnb.current.querySelectorAll("div");
    divs.forEach((item, idx) => {
      item.addEventListener("click", () => {
        window.scrollTo({
          top: headLine[idx],
          behavior: "smooth",
        });
      });
    });
  };

  useEffect(() => {
    moveHeadLine();
    // window.addEventListener("scroll", getOffsetTop);
    // return () => {
    //   window.removeEventListener("scroll", getOffsetTop);
    // };
  }, [isScroll]);

  return (
    <header ref={gnb}>
      <div className="titleSlide">
        <h1>
          Frontend Developer <br />
          Gunho Kim
          <em>2023</em>
        </h1>
      </div>

      <ul>
        <li>
          <div>
            <em>01</em>SKILLS
          </div>
        </li>
        <li>
          <div>
            <em>02</em>WORKS
          </div>
        </li>
        <li>
          <div>
            <em>03</em>CONTACT
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
