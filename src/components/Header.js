import "../assets/style/header.scss";
import { useRef, useEffect } from "react";

function Header({ scrollY, getTitle }) {
  const navData = [
    { id: 1, title: "skills" },
    { id: 2, title: "works" },
    { id: 3, title: "contact" },
  ];
  const headerRef = useRef(null);
  let navLink = null;

  const navControl = () => {
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

  const changeTitle = () => {
    const scrollY = window.scrollY;
    const titles = headerRef.current.querySelectorAll(".titleSlide li");
    getTitle.current.forEach((title, idx) => {
      if (title - scrollY < 5) {
        titles.forEach((title) => title.classList.remove("on"));
        titles[idx].classList.add("on");
      }
    });
  };

  useEffect(() => {
    navControl();
    moveToTitle();
  });

  useEffect(() => {
    window.addEventListener("scroll", changeTitle);
    return () => window.addEventListener("scroll", changeTitle);
  }, []);

  return (
    <header ref={headerRef}>
      <ul className="titleSlide navBtn">
        <li>
          <h1>
            Frontend Developer <br />
            Gunho Kim
            <em>2023</em>
          </h1>
        </li>
        {navData.map((title) => (
          <li key={title.id} className="subTitle">
            {title.title}
          </li>
        ))}
      </ul>

      <ul className="navCategory">
        {navData.map((title) => {
          return (
            <li key={title.id}>
              <div className="navBtn">
                <em>01</em>
                {title.title}
              </div>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
