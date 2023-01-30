import { useState } from "react";
import "../assets/style/works.scss";
import workListData from "./workListData";
import WorksList from "./WorksList";
import WorksView from "./WorksView";

function Works() {
  const [worksIndex, setWorksIndex] = useState(1);

  return (
    <article className="article_works headline">
      <h3>Works</h3>
      <div className="worksBox">
        <WorksList workListData={workListData} setWorksIndex={setWorksIndex} />
        {workListData.map((data) => (
          <WorksView data={data} key={data.id} worksIndex={worksIndex} />
        ))}
      </div>
    </article>
  );
}

export default Works;
