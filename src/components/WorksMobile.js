import "../assets/style/works.scss";
import workListData from "../assets/data/workListData";
import { Link } from "react-router-dom";

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
                <img src={img} alt="" />
              </div>
              <ul>
                {category.map((use, idx) => (
                  <li key={idx}>{use}</li>
                ))}
              </ul>
              {id === 1 ? (
                <a href={page} target="_blank">view more</a>
              ) : (
                <Link to={page}>view more</Link>
              )}
            </li>
          );
        })}
      </ul>
      <div className="halfCircle">for contact design</div>
    </article>
  );
}

export default WorksMobile;
