import "../assets/style/header.scss";
import { useRef, useEffect, useState } from "react";

function Header({ getTitle }) {
  const navData = [
    { id: 1, title: "skills" },
    { id: 2, title: "works" },
    { id: 3, title: "contact" },
  ];
  const headerRef = useRef(null);
  let navLink = null;

  const navControl = () => {
    const scrollY = window.scrollY;
    const header = headerRef.current;
    if (header.offsetTop - scrollY < 15) {
      header.className = "active";
    } else {
      header.className = "";
    }
  };

  const moveToTitle = () => {
    navLink = headerRef.current.querySelectorAll(".navBtn");
    navLink.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        window.scrollTo({
          top: getTitle.current[idx],
          behavior: "smooth",
        });
      });
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", navControl);
    moveToTitle();
    return () => {
      window.removeEventListener("scroll", navControl);
    };
  }, []);

  const [gnb, setGnb] = useState(false);

  return (
    <header ref={headerRef}>
      <div className="titleSlide navBtn">
        <h1>
          Frontend Developer Gunho Kim
          <em>2023</em>
        </h1>
      </div>

      <ul className="navCategory">
        {navData.map((title) => {
          return (
            <li key={title.id} className="navBtn">
              <em>0{title.id}</em>
              {title.title}
            </li>
          );
        })}
      </ul>

      <div className={`mobileMenu ${gnb ? "on" : ""}`} onClick={()=>setGnb(!gnb)}>
        <div className="GnbBtn">open&close buttton</div>
        <ul className="mobileGnb">
          {navData.map((title) => {
            return (
              <li key={title.id} className="navBtn">
                <em>0{title.id}</em>
                {title.title}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
