import "../assets/style/header.scss";
import { useRef, useEffect, useState } from "react";

function Header({ getTitle }) {
  const navData = [
    { id: 1, title: "skills" },
    { id: 2, title: "works" },
    { id: 3, title: "contact" },
  ];
  const headerRef = useRef(null);

  const navControl = () => {
    const scrollY = window.scrollY;
    const header = headerRef.current;
    if (header.offsetTop - scrollY < 15) {
      header.className = "active";
    } else {
      header.className = "";
    }
  };

  const moveToTitle = (idx) => {
    window.scrollTo({
      top: getTitle.current[idx],
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", navControl);
    return () => {
      window.removeEventListener("scroll", navControl);
    };
  }, []);

  const [gnb, setGnb] = useState(false);

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
              {title.title}
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
