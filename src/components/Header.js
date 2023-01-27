import { Link } from "react-router-dom";
import "../assets/style/header.scss";

function Header() {
  return (
    <header>
      <h1>
        Frontend Developer <br />
        Gunho Kim
        <em>2023</em>
      </h1>

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
