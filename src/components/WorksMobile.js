import "../assets/style/works.scss";
import workListData from "./workListData";
import { Link } from "react-router-dom";

function WorksMobile() {
  return (
    <article className="article_works">
      <h3 className="headline">WORKS</h3>
      <ul className="worksList_mobile">
        {workListData.map((work) => {
          return (
            <li key={work.id}>
              <p>
                {work.name}
                <em>{work.peoples}</em>
                <span>{work.duration}</span>
              </p>
              <div className="imgBox">
                <img src={work.img} alt="" />
              </div>
              <ul>
                {work.category.map((use, idx) => (
                  <li key={idx}>{use}</li>
                ))}
              </ul>
              <Link to="#">view more</Link>
            </li>
          );
        })}
      </ul>
      <div className="halfCircle">for contact design</div>
    </article>
  );
}

export default WorksMobile;
