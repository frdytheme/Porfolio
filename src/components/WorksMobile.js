import "../assets/style/works.scss";
import workListData from "../assets/data/workListData";

function WorksMobile() {
  return (
    <article className="article_works">
      <h3 className="headline">WORKS</h3>
      <ul className="worksList_mobile">
        {workListData.map((work) => {
          const { id, name, peoples, duration, img, category, page } = work;
          return (
            <li key={id}>
              <p>
                {name}
                <em>{peoples}</em>
                <span>{duration}</span>
              </p>
              <div className="imgBox">
                <img src={img} alt="프로젝트 이미지" />
              </div>
              <ul>
                {category.slice(0,4).map((use, idx) => (
                  <li key={idx}>{use}</li>
                ))}
              </ul>
              <a href={page} target="_blank" rel="noreferrer">
                view more
              </a>
            </li>
          );
        })}
      </ul>
      <div className="halfCircle">for contact design</div>
    </article>
  );
}

export default WorksMobile;
