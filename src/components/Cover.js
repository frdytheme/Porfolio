import { useEffect, useRef } from "react";
import "../assets/style/cover.scss";

function Cover() {
  const coverRef = useRef(null);

  const showTitle = () => {
    const title = coverRef.current.querySelectorAll(".mainTitle p");

    title.forEach((title, idx) => {
      setTimeout(() => {
        title.classList.add("show");
      }, idx * 300);
    });
  };

  useEffect(() => {
    showTitle();
  }, []);

  return (
    <article className="article_cover" ref={coverRef}>
      <div className="mainTitle">
          <p>안녕하세요</p>
          <p className="boldTxt">배움에 게으르지 않은</p>
          <p>김건호입니다.</p>
      </div>
      <div className="subTitle">
        <p>{`{`}</p>
        <p>
          {`" 스스로 행동하는가? " `}
          <em>: true , </em>
        </p>
        <p>
          {`" 할 수 있다에 만족하는가? " `}
          <em>: false</em>
        </p>
      </div>
    </article>
  );
}

export default Cover;
