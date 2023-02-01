import "../assets/style/header.scss";
import { useRef, useEffect } from "react";

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
            <li key={title.id} className="navBtn on">
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
