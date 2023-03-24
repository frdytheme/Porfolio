import {} from "react-router-dom";
import "../assets/style/contact.scss";

function Contact() {
  return (
    <article className="article_contact">
      <h3 className="headline">Contact</h3>
      <div className="contactWrapper">
        <div className="txtBox">
          <p>
          <strong>“저는 새로운 경험을 두려워하지 않는 자신감을 가졌습니다.”</strong>
            <br />
            저에게 경험은 문제를 해결하는 힌트이며 응용은 새로운 답을 만드는 가능성입니다.
          </p>
          <p>
            눈에 보이는 영역을 제어하고 사용자의 경험을 위해 고민하는 시간이 즐겁기에
            <br />
            그 시간들을 경험으로 여겨 묵묵하지만 부지런히 나아가고
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
            <a
              href="mailto:rbfridayy@gmail.com"
              target="_blank"
              rel="noreferrer">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/frdytheme"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://frdytheme.tistory.com/"
              target="_blank"
              rel="noreferrer">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Contact;
