import "../assets/style/header.scss";
import { useRef, useEffect, useState } from "react";

function Header({ getTitle, mainRef }) {
  const navData = [
    { id: 1, title: "skills" },
    { id: 2, title: "works" },
    { id: 3, title: "contact" },
  ];
  const headerRef = useRef(null);
    const [gnb, setGnb] = useState(false);

  const navControl = () => {
    const scrollY = window.scrollY;
    const header = headerRef.current;

    if (header.offsetTop - scrollY < 15) {
      header.className = "active";
    } else {
      header.className = "";
    }

    const navBtns = header.querySelectorAll(".navBtn");
    const headLines = mainRef.current.querySelectorAll(".headline");
    navBtns.forEach((btn, idx) => {
      if (headLines[idx].className === "headline over") {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  const moveToTitle = (idx) => {
    const headerHeight = headerRef.current.clientHeight;
    window.scrollTo({
      top: getTitle.current[idx] - headerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    navControl();
    window.addEventListener("scroll", navControl);
    return () => {
      window.removeEventListener("scroll", navControl);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <div className="titleSlide" onClick={() => moveToTitle(0)}>
        <h1>
          Frontend Developer Gunho Kim
          <em>2023</em>
        </h1>
      </div>

      <div
        className={`mobileMenu ${gnb ? "on" : ""}`}
        onClick={() => setGnb(!gnb)}>
        <div className="GnbBtn">open&close buttton</div>
      </div>

      <ul className="navCategory">
        {navData.map((title) => {
          return (
            <li
              key={title.id}
              className="navBtn"
              onClick={() => moveToTitle(title.id)}>
              <em>0{title.id}</em>
              <span>{title.title}</span>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
