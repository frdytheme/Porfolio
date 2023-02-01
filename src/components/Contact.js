import { Link } from "react-router-dom";
import "../assets/style/contact.scss";

function Contact() {
  return (
    <article className="article_contact">
      <h3 className="headline">Contact</h3>
      <div className="contactWrapper">
        <div className="txtBox">
          <p>
            음악과 영상처럼 스스로 창작하는 과정을 좋아하기에 꿈을 쫓았었습니다.
            <br />
            숨을 고르고 보니 그 때의 치열함은 여백이 되었지만 그만큼 더 많이
            채우려 합니다.
          </p>
          <p>
            눈에 보이는 영역을 제어하고 사용자의 경험을 위해 고민하는 시간이
            가장 즐겁기에
            <br />
            이 즐거움을 잃어버리지 않기 위해 묵묵하지만 부지런히 나아가고
            싶습니다.
            <br />
          </p>
          <p>
            <strong>
              스스로 행동할 줄 알고 배움에 게으르지 않은 프론트엔드 개발자가
              되겠습니다.
              <br />
              감사합니다.
            </strong>
          </p>
        </div>
        <ul className="contactLink">
          <li>
            <Link>Email</Link>
          </li>
          <li>
            <Link>Github</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Contact;
